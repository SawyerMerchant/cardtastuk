class ApplicationController < ActionController::Base
  def fallback_index_html
    puts "%%%%%%%%%%hit fallback_index_html%%%%%%%%%%%%%"
    render Rails.public_path.join("index.html")
  end

  def current_organization
    @current_organization ||= ::Subdomains::Organization[request.subdomain]
  end

end
