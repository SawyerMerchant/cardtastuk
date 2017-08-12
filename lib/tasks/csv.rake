require 'csv'
task :csv => :environment do

  local_file = File.open('25Contacts.csv')

  list = List.create( name:       "rakeContacts",
                      user_id:    User.last.id,
                      url:        local_file)

  CSV.parse(local_file, headers: true) do |row|
    # puts "#{row['first_name']}"
    recipient = Recipient.create(first_name: row['first_name'],
                                 last_name:  row['last_name'],
                                 list_id:    list.id)
    a = Address.create(address_line1: row['address_line1'],
                       address_line2: row['address_line2'],
                       city:          row['city'],
                       state:         row['state'],
                       zip:           row['zip'])
    recipient.address = a
  end



end
task :csv
