class ApplicationJob < ActiveJob::Base
  before_perform do |job|
    # ensure heroku db connection for resque
    ActiveRecord::Base.clear_active_connections!
  end
end
