class ListsController < ApiController
  before_action :authenticate_user!
  before_action :parse_csv, :make_list, only: [:create]
  before_action :make_recipients, only: [:create], if: -> { @list.persisted? }

  def create
    puts "@list.to_json"
    p @list.to_json
    if @list.persisted? && @list.recipients.count > 0
      render json: @list.to_json, status: :created, location: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end


  private

  def list_params
    params.permit(:name, :user_id, :url)
  end

  def parse_csv
    @url = Paperclip.io_adapters.for(params[:url])
    @uploaded_list = Paperclip.io_adapters.for(@url).read
    @name = params[:name]
    @user_id = params[:user_id]
  end

  def make_list
    @list = List.create(url: @url, name: @name, user_id: @user_id)
  end

  def make_recipients
    CSV.parse(@uploaded_list, headers: true) do |row|
      recipient = Recipient.create(first_name: row['first_name'],
                                   last_name:  row['last_name'],
                                   list_id:    @list.id)
      a = Address.create(address_line1: row['address_line1'],
                         address_line2: row['address_line2'],
                         city:          row['city'],
                         state:         row['state'],
                         zip:           row['zip'])
      recipient.address = a
    end
  end


end
