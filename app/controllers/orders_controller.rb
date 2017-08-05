class OrdersController < ApiController
  before_action :parse_params
  def create
    order = newOrder
    order.save
    stripeOrder = StripeOrder.new(order)
    response = stripeOrder.charge


    if response['status'] == 'succeeded'
      render json: {id: order.id, amount: response['amount']}, status: :success
    else
      render json: response['errors'], status: :unprocessable_entity
    end
  end


  private

  def parse_params
    @body = JSON.parse request.body.read
  end

  def newOrder
    Order.new(
      user_id: @body['user']['id'],
      stripe: @body
    )
  end

end
