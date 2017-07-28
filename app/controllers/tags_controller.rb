class TagsController < ApiController
  def index
    @tags = Tag.select("id, name, small_img_url, medium_img_url, orientation, size, category_id").all
    render json: @tags.to_json
  end
end
