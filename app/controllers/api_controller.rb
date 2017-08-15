class ApiController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :configure_permitted_parameters, if: :devise_controller?


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation, :referral_organization_id, :referral_member_id])
  end
end
