require 'stripe'
require 'resolv-replace'
class Order < ApplicationRecord
  belongs_to :user
  has_many :line_items
  belongs_to :fulfillment, required: false

  after_create :save_billing_address, :save_return_address, :connectAPI


  def self.pending_card_count
    sql = "SELECT SUM(line_items.quantity)
            FROM line_items
            JOIN orders
            ON orders.id = line_items.order_id
            WHERE orders.status = 'pending'"
    quantity = ActiveRecord::Base.connection.execute(sql)[0]["sum"]
    puts "#{quantity} Pending Cards"
    p quantity

  end

  def connectAPI
    Stripe.api_key = 'sk_test_f1UnEkd05xv5bOPkj3KusZrc'
    @logger = Logger.new(STDOUT)
    @logger.level = Logger::WARN
  end

  def confirm_totals
    puts "front_charge: #{self.front_charge}"
    puts "back_charge: #{self.back_charge}"
    self.front_charge == self.back_charge
  end

  def send_to_stripe
    if !confirm_totals
      @logger.warn "Front and back charge mismatch"
    else
      # tries ||= 3
      amount = self.back_charge
      source = self.stripe['token']['id']
      transfer_group = self.id
      response = Stripe::Charge.create({
        :amount => amount,
        :currency => "usd",
        :source => source,
        :transfer_group => transfer_group,
      })
      # rescue
      #   @logger.warn "Failed to connect, #{tries} tries remaining. Response was #{response}"
      #   retry unless (tries -= 1).zero?
      # else
      @logger.info "Successful Charge"
      response
      # end
    end
  end

  def total_order
    total = 0
    self.stripe['transaction_details']['line_items'].each do |li|
      total += make_line_item(li)
    end
    self.front_charge = self.stripe['order_total'] * 100
    self.back_charge = total
    self.save
  end

  def make_line_item(li)
    charge_amount = line_item_total(li)

    signature = false
    if li['user_signature'] != ""
      signature = true
      baseString = li['user_signature'].split(',')[1]
      decoded_data = Base64.decode64(baseString)
      data = StringIO.new(decoded_data)
      data.class_eval do
        attr_accessor :content_type, :original_filename
      end
      data.content_type = "image/png"
      data.original_filename = "signature.png"
    else
      print_name = li['userName']
    end

    if signature
      LineItem.create(
        order_id: self.id,
        list_id:  li['list']['id'],
        greeting: li['message'],
        card_id:  li['card']['id'],
        autograph: data,
        #TODO add print_name
        quantity: li['quantity'],
        price_id: li['card']['price_id'],
        charge_amount: charge_amount,
        return_address_line_1: li['return_address']['street_address_1'],
        return_address_line_2: li['return_address']['street_address_2'],
        return_city: li['return_address']['city'],
        return_state: li['return_address']['state'],
        return_zip: li['return_address']['zipcode'],
        font: li['font']
      )
    else
      LineItem.create(
        order_id: self.id,
        list_id:  li['list']['id'],
        greeting: li['message'],
        card_id:  li['card']['id'],
        print_name: print_name,
        quantity: li['quantity'],
        price_id: li['card']['price_id'],
        charge_amount: charge_amount,
        return_address_line_1: li['return_address']['street_address_1'],
        return_address_line_2: li['return_address']['street_address_2'],
        return_city: li['return_address']['city'],
        return_state: li['return_address']['state'],
        return_zip: li['return_address']['zipcode'],
        font: li['font']
      )
    end
    return charge_amount
  end

  def save_billing_address
    user = User.find(self.stripe['user']['id'])
    self.stripe['transaction_details']['billing_address']
    # TODO add billing email if different than login
  end

  def save_return_address
  end

  def line_item_total(line_item)
    card = Card.find(line_item["card"]["id"])
    quantity = line_item["quantity"]
    tier = get_tier(quantity)
    unit_price = card.price[tier]
    quantity * unit_price
  end

  def get_tier(quantity)
    case quantity
    when 1..24
      raise ArgumentError, "Order List must contain at least 25 recipients"
    when 25..99
      :x25
    when 100..249
      :x100
    when 250..499
      :x250
    when 500..999
      :x500
    when 1000..1999
      :x1000
    when quantity > 1999
      :x2000
    when String
      raise ArgumentError, "Order quantity may not be a string"
    else
      raise ArgumentError, "#{quantity} quantity is unprocessable"
    end
  end
end
