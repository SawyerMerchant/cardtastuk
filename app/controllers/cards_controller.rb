class CardsController < ApiController
  # GET /cards
  def index
    @cards = Card.includes(:tags).select("id, name, small_img_url, medium_img_url, orientation, size, category_id, price_id").all
    render json: @cards.to_json(:include => { :category => { :only => [:name] },
                                              :tags => { :only => [:name] },
                                              :price => { :except => [:id, :name, :created_at, :created_at]}
                                              })
  end

  # GET /cards/:id
  def show
    @card = Card.find(params[:id])
    render json: @card.to_json(:include => { :category => { :only => [:name] },
                                             :tags => { :only => [:name] },
                                             :price => { :except => [:id, :name, :created_at, :created_at]}
                                             })
  end
end
