class OrdersController < ApiController
  before_action :parse_params
  def create
    # order = newOrder
    # stripeOrder = StripeOrder.new(order)
    # response = stripeOrder.charge
    puts "%%%%%%%%%%%%%%%%%%%"
    # puts "response['status']"
    # p response['status']
    # puts "=="
    # p response['status'] == 'succeeded'
    p @body
    puts "%%%%%%%%%%%%%%%%%%%"




    if response['status'] == 'succeeded'
      render json: {id: order.id, amount: response['amount']}, status: :created
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
    ).save
  end

end
