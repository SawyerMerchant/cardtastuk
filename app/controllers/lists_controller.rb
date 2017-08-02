class ListsController < ApiController
  def create
    puts "params"
    p params
    puts "request.body.read"
    p request.body.read
    list = List.new(url: Base64.decode64(params[:url]), name: params[:name], user_id: params[:user_id])
    if list.save
      render json: list, status: :created, location: list
    else
      render json: list.errors, status: :unprocessable_entity
    end
  end



  private

  def list_params
    params.permit(:name, :user_id, :url)
  end
end
