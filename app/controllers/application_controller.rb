class ApplicationController < ActionController::Base
  protect_from_forgery

  def fallback_index_html
    puts "%%%%%%%%%%hit fallback_index_html%%%%%%%%%%%%%"
    render file: 'public/index.html'
  end

  def access_denied(exception)
    # redirect_to admin_dashboard_path, alert: exception.message
    Rails.logger.error "access denied! '#{exception.message}'"
  end

  def current_ability
    @current_ability ||= Ability.new(current_admin_user)
  end

  def current_organization
    @current_organization ||= ::Organization[request.subdomain]
  end

end
