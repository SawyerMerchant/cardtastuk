require "rails_helper"
require "spec_helper"
include Rack::Test::Methods

describe "GET /cards" do
  it 'sends a list of cards' do
    FactoryGirl.create_list(:card, 10)

    get '/api/v1/cards'

    json = JSON.parse(response.body)

    # test for the 200 status-code
    expect(response).to be_success

    # check to make sure the right amount of cards are returned
    expect(json.length).to eq(10)
  end
end

describe "GET /cards/1" do
  it 'sends the card of the requested id' do
    card = FactoryGirl.create(:card)

    get "/api/v1/cards/#{card.id}"

    json = JSON.parse(response.body)

    expect(response).to be_success

    expect(json["id"]).to eq(card.id)

  end
end
