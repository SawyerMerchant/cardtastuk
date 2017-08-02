class ListsController < ApiController
  def create
    list = List.new(url: Paperclip.io_adapters.for(params[:url]), name: params[:name], user_id: params[:user_id])
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

  # def parse_csv
  #   image = Paperclip.io_adapters.for(image_base)
  #   image.original_filename = "file.jpg"
  #   self.picture = image
  # end


end
