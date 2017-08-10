require 'stripe'
require 'resolv-replace'
class Order < ApplicationRecord
  belongs_to :user
  has_many :proofs
end


class StripeOrder
  def initialize(order)
    Stripe.api_key = 'sk_test_f1UnEkd05xv5bOPkj3KusZrc'
    @order = order
    @logger = Logger.new(STDOUT)
    @logger.level = Logger::WARN
  end

  def process
    # make_line_items
    # charge
    #
  end

  def charge
    tries ||= 3
    amount = order_total
    source = @order.stripe['token']['id']
    transfer_group = @order.id
    # puts "amount: #{total}"
    # puts "source: #{@order.stripe['token']['id']}"
    # puts "transfer_group: #{@order.id}"
    response = Stripe::Charge.create({
      :amount => amount,
      :currency => "usd",
      :source => source,
      :transfer_group => transfer_group,
    })
  rescue
    @logger.warn "Failed to connect, #{tries} tries remaining. Response was #{response}"
    retry unless (tries -= 1).zero?
  else
    @logger.info "Successful Charge"
    response
  end

  def order_total
    total = 0
    @order.stripe['transaction_details']['line_items'].each do |li|
      total += line_item_total(li)
    end
    total
  end

  private

  def make_line_items
    # in db
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
