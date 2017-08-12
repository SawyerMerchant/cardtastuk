require 'csv'
task :csv => :environment do

  local_file = File.open('exampleContacts.csv')

  CSV.parse(local_file, headers: true) do |row|

    puts "#{row['first_name']}"
  end



end
task :csv
