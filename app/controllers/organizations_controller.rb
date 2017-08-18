class OrganizationsController < ApplicationController
  def index
    @organizations = Organization.by_active
    render json: @organizations.to_json
  end

  def create
    @organization = Organization.new(name: params[:organization_name])
    @admin_user = AdminUser.new(email: params[:email], password: params[:password], first_name: [:first_name], last_name: params[:last_name])

    if @organization.save && @admin_user.save
      render @organization.to_json
    end
  end


end
