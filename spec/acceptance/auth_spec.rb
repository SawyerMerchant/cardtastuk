require 'rails_helper'
require 'rspec_api_documentation/dsl'
require 'acceptance_helper'

resource "Authorizations" do
  header "Accept", "application/json"
  header "Content-Type", "application/json"
  # parameter :email, "sawyermerchant@gmail.com", required: true, scope: :user
  post "/auth" do
    # params = {
    #   :email => "sawyermerchant@gmail.com",
    #   :password => "password",
    #   :password_verrification => "password",
    #   :confirm_success_url => "tastuk.com"
    # }.to_json
    # let(:raw_post) {params}
    parameter :email, "sawyermerchant@gmail.com", :required => true#, :scope => ""
    parameter :password, "password", :required => true#, :scope => ""
    parameter :password_verrification, "password", :required => true#, :scope => ""
    parameter :confirm_success_url, "http://tastuk.com", :required => true#, :scope => ""

    response_field :email, "sawyermerchant@gmail.com", :scope => :user, "Type" => "String"
    response_field :password, "password", :scope => :user, "Type" => "String"
    response_field :password_verrification, :scope => :user, "Type" => "String"
    response_field :confirm_success_url, "http://tastuk.com", :scope => :user, "Type" => "String"

    let(:email) { "sawyermerchant@gmail.com" }
    let(:password) { "password" }
    let(:password_verrification) { "password" }
    let(:confirm_success_url) { "http://tastuk.com" }

    let(:raw_post) {params.to_json}

    example_request "Email registration" do
      # explanation "Create an user via api"
#
      # user = JSON.parse(response_body)
      # byebug
      # expect("id", "created_at", "updated_at").to eq({
      #   "email" => email
        # "confirm_success_url" => confrim_success_url
        # })
      byebug
      expect(status).to eq(201)
      client.get(URI.parse(response_headers["location"]).path, {}, headers)
      expect(status.to eq(200))
      # do_request
      # expect(status).to eq(200)
      # expect {do_request}.to change{User.count}.by(1)
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
