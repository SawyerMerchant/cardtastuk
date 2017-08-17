class ApiController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :configure_permitted_parameters, if: :devise_controller?


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation, :organization_id, :admin_user_id, :session])
    # devise_parameter_sanitizer.for(:sign_up) << :organization_id
    # devise_parameter_sanitizer.for(:sign_up) << :admin_user_id

  end
end
