require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "Cards" do
  FactoryGirl.create_list(:card, 2)
  get "/api/v1/cards" do
    example "Listing cards" do
      do_request
      expect(status).to eq(200)
    end
  end


  card = FactoryGirl.create(:card)
  get "api/v1/cards/#{card.id}" do

    example_request "Getting a specific card" do
      do_request
      json = JSON.parse(response_body)
      expect(json["id"]).to eq(card.id)
      expect(status).to eq(200)
    end
  end

end
