class ApplicationController < ActionController::Base
  def fallback_index_html
    puts "%%%%%%%%%%hit fallback_index_html%%%%%%%%%%%%%"
    get Rails.public_path.join('index.html')
    # Rails.root.join("public", "index.html")
  end

  def current_organization
    @current_organization ||= ::Subdomains::Organization[request.subdomain]
  end

end
