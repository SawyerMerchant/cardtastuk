class ListsController < ApiController
  before_action :parse_csv
  def create
    list = List.new(url: @url, name: @name, user_id: @user_id, count: @row_count, first_record: @first_record)
    if list.save
      render json: list.to_json, status: :created, location: list
    else
      render json: list.errors, status: :unprocessable_entity
    end
  end



  private

  def list_params
    params.permit(:name, :user_id, :url)
  end

  def parse_csv
    @url = Paperclip.io_adapters.for(params[:url])
    @row_count = 0
    @first_record = {}
    CSV.parse(Paperclip.io_adapters.for(@url).read, :headers=>true) do |row|
      if @row_count == 0
        @first_record[:first_name] = row[0]
        @first_record[:last_name] = row[1]
        @first_record[:address_line1] = row[2]
        @first_record[:address_line2] = row[3]
        @first_record[:city] = row[4]
        @first_record[:state] = row[5]
        @first_record[:zip] = row[6]
      end
      @row_count += 1
    end
    @name = params[:name]
    @user_id = params[:user_id]

  end
end
