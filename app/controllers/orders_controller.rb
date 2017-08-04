class OrdersController < ApiController
  def create
    order = Order.new(order_params)
    order.stripe = request.body
    stripeOrder = StripeOrder.new(order)
    response = stripeOrder.charge
    puts "charged"
    p response["amount"]
    puts "id"
    p response["id"]
  end


  private

  def order_params
    params.permit(user_id)
  end
end
