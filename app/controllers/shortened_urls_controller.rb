class ShortenedUrlsController < ApplicationController
  def index
    @shortened_url = ShortenedUrl.find_by(code: request.headers["code"])
    puts "@shortened_url"
    p @shortened_url
    render json: @shortened_url.to_json
  end
end
