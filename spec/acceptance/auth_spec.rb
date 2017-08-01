require 'rails_helper'
require 'rspec_api_documentation/dsl'
require 'acceptance_helper'

resource "Authorizations" do
  # attributes = FactoryGirl.attributes_for(:user)
  # parameter :email, "sawyermerchant@gmail.com", required: true, scope: :user
  post "/auth" do
    header "Content-Type", "application/json"
    # parameter :email, "sawyermerchant@gmail.com", required: true, scope: :user
    # parameter :password, "password", required: true, scope: :user
    # parameter :password_confirmation, "password", required: true, scope: :user
    params = {
      :email => "sawyermerchant@gmail.com",#, :required => true, :scope => :params
      :password => "password",#, :required => true, :scope => :params
      :password_confirmation => "password",#, :required => true, :scope => :params
      :confirm_success_url => "tastuk.com"
    }.to_json
    let(:raw_post) {params}
    example "Email registration" do
      do_request
      byebug
      expect(status).to eq(200)
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
