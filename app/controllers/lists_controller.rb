class ListsController < ApiController
  def create
    puts "params"
    p params
    list = List.new(list_params)
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
