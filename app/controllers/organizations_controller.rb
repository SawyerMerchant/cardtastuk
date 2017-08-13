class OrganizationsController < ApplicationController
  def index
    @organizations = Organization.by_active
    render json: @organizations.to_json
  end
end
