class RegistrationsController < DeviseTokenAuth::RegistrationsController

  def new
    super
  end

  def create
    super
  end

  def update
    super
  end

  private

  def sign_up_params
    params.permit(:email, :password, :password_confirmation, :organization_id, :admin_user_id, :session)
  end


end
