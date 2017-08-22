Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable/disable caching. By default caching is disabled.
  if Rails.root.join('tmp/caching-dev.txt').exist?
    config.action_controller.perform_caching = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => 'public, max-age=172800'
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  config.action_mailer.perform_caching = false

  config.action_mailer.default_url_options = { host: 'localhost', port: 3001 }

  #local email send/deliver with letter opener
  config.action_mailer.delivery_method = :letter_opener

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load


  # Raises error for missing translations
  # config.action_view.raise_on_missing_translations = true

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  config.file_watcher = ActiveSupport::EventedFileUpdateChecker

  # This is your imagemagick directory, retrieved
  # using `which convert`
  Paperclip.options[:command_path] = "/usr/local/bin"

  config.paperclip_defaults = {

  #   # Don't forget to make S3 your storage option!
    storage: :s3,
    s3_host_name: ENV['AWS_HOST_NAME'],
    s3_region: ENV['AWS_REGION'],

    :s3_credentials => {
      s3_host_name: ENV['AWS_HOST_NAME'],
      bucket: ENV['LIST_BUCKET'],
      access_key_id: ENV['AWS_ACCESS_KEY'],
      secret_access_key: ENV['AWS_SECRET_KEY'],
  #     # put your host name here if needed
  #     #   see the reading below for more details
  #     # NOTE: These must be the correct region for YOUR bucket
  #     # :s3_host_name => "s3-us-west-1.amazonaws.com",
  #     # :s3_region => "us-west-1"
  #     #
  #     # # NOTE: these lines are changed to use secrets.yml
  #     # # from the examples (which use ENV vars instead)
  #     # :bucket => Rails.application.secrets.s3_bucket_name,
  #     # :access_key_id => Rails.application.secrets.aws_access_key_id,
  #     # :secret_access_key => Rails.application.secrets.aws_secret_access_key
    }
  }
end
