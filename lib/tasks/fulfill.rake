require 'rubygems'
require 'bundler/setup'
require 'mechanize'

task :fulfill => :environment do

  pending_card_count = Order.pending_card_count
  if pending_card_count > 500
    Fulfillment.transmit(pending_card_count)
  end

end
task :fulfill
