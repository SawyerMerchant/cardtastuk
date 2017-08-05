require 'rails_helper'
require 'rspec_api_documentation'
require 'rspec_api_documentation/dsl'

RspecApiDocumentation.configure do |config|
  config.format = [:json]
  config.curl_host = 'http://127.0.0.1:3001'
  config.api_name = "Cardtastuk"
end
