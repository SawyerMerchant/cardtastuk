require 'stripe'
module StripeServices
  class StripeOrder
    def initialize(order)
      Stripe.api_key = 'sk_test_f1UnEkd05xv5bOPkj3KusZrc'
      @order = order
    end

    def process
      # make_line_items
      # charge
      #
    end

    def charge
      Stripe::Charge.create({
        :amount => order_total,
        :currency => "usd",
        :source => @order.stripe['token']['id'],
        :transfer_group => @order.id,
      })
    end

    def order_total
      total = 0
      @order.stripe['transaction_details']['orders'].each do li #TODO change orders to line_items and prepend with .stripe
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
      tier = get_tier(25) #TODO change this back to quantity after test
      unit_price = Card.price[tier]
      puts "Line item quantity is #{quantity}, but sending in 25"
      25 * unit_price #TODO change this back to quantity after test
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

end
puts "running a test order"
