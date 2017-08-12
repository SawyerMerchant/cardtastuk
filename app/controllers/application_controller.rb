class ApplicationController < ActionController::Base
  def fallback_index_html
    render "/index.html"
  end

end
