class RepsController < ApiController
  def create
    @admin_user = AdminUser.new(email: params[:email],
                  password: params[:password],
                  first_name: params[:first_name],
                  last_name: params[:last_name],
                  role: "rep")

    if @admin_user.save
      render @admin_user.to_json
    end
  end
end
