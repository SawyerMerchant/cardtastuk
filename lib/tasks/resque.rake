task "resque:setup" => :environment do
  ENV['QUEUE'] ||= '*'
  #for redistogo on heroku http://stackoverflow.com/questions/2611747/rails-resque-workers-fail-with-pgerror-server-closed-the-connection-unexpectedl
  Resque.before_fork = Proc.new { ActiveRecord::Base.establish_connection }
  Resque.redis = 'localhost:6379'
  Resque.logger.level = Logger::DEBUG
  Resque.logger = Logger.new(Rails.root.join('log', "#{Rails.env}_resque.log"))
end
