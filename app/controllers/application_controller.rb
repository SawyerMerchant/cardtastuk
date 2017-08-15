class ApplicationController < ActionController::Base
  def fallback_index_html
    puts "%%%%%%%%%%hit fallback_index_html%%%%%%%%%%%%%"
    render file: 'public/index.html'
  end

  def current_organization
    @current_organization ||= ::Organization[request.subdomain]
  end

end
