class OrdersController < ApiController
  before_action :parse_params
  def create
    order = newOrder
    order.save
    stripeOrder = StripeOrder.new(order)
    response = stripeOrder.charge

    data = {id: order.id, amount: response['amount']}.to_json

    if response['status'] == 'succeeded'
      render json: data, status: 200
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
