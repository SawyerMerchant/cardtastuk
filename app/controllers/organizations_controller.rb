class OrganizationsController < ApiController
  def index
    @organizations = Organization.by_active
    render json: @organizations.to_json
  end

  def create
    @organization = Organization.create(name: params[:organization_name],
                                        active: true)

    @admin_user = AdminUser.new(email: params[:email],
                  password: params[:password],
                  first_name: params[:first_name],
                  last_name: params[:last_name],
                  role: "leader",
                  organization_id: @organization.id)

    if @organization.persisted? && @admin_user.save
      render json: @organization.to_json
    end
  end


end
