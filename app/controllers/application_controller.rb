class ApplicationController < ActionController::Base
  def fallback_index_html
    render "public/index.html.erb"
  end

end
