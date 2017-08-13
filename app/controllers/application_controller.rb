class ApplicationController < ActionController::Base
  def fallback_index_html
    render "/index.html"
  end

  def current_organization
    @current_organization ||= ::Subdomains::Organization[request.subdomain]
  end

end
