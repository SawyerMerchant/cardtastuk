class CardsController < ApiController
  # GET /cards
  def index
    # how to add category and tags here?
    @cards = Card.select("id, name, small_img_url, medium_img_url, orientation, size").all
    render json: @cards.to_json
  end

  # GET /cards/:id
  def show
    @card = Card.find(params[:id])
    render json: @card.to_json(:include => { :category => { :only => [:name] }})
  end
end
