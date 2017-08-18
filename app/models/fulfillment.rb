require 'mechanize'

class Fulfillment < ApplicationRecord
  has_many :orders
  has_attached_file :combined_list
  do_not_validate_attachment_file_type :combined_list

  def self.build_csv
    # pending_line_items = Recipient.joins(:order).where("status = 'pending'")
    sql = "SELECT first_name, last_name, address_line1, address_line2, city, state, zip, line_items.id
              FROM addresses
              JOIN recipients
              ON addresses.addressable_id = recipients.id
              JOIN line_items
              ON recipients.list_id = line_items.list_id
              JOIN orders
              ON orders.id = line_items.order_id
              WHERE orders.status = 'pending'"
    p addresses = ActiveRecord::Base.connection.execute(sql).to_a

    csvNum = Fulfillment.last.id || 0
    csvNum += 1
    csvName = "fulfillment#{csvNum}.csv"

    CSV.open(csvName, "w") do |csv|
      csv << ['first_name', 'last_name', 'address_line1', 'address_line2', 'city', 'state', 'zip', 'line_item_id']
      addresses.each do |row|
        csv << row.values
      end
    end
    # attach_file = {
    #   content_type:"csv",
    #   original_filename:"myfile.csv",
    #   tempfile:File.open("myfile.csv")
    # }

    # return Paperclip.io_adapters.for(File.open(csvName))
  end

  def self.transmit(quantity)
    # combined_list =
    Fulfillment.build_csv
    f = Fulfillment.create(combined_list: combined_list)
    agent = Mechanize.new
    page = agent.get(PRINT_URL)
    p pageUri = page.uri.to_s #confirm on first page
    quoteButton = page.link_with(dom_id: "ctl00_MainContextPH_HyperLink1")

    quoteUrl = quoteButton.href
    page = agent.get(quoteUrl)
    p pageUri = page.uri.to_s #confirm on second page
    ###########################################

    form = page.form(name: "aspnetForm")
    # p form.buttons.length
    # form.set_attribute
    # form["ctl00$MainContextPH$tbProjectName"] = "AutoTestID"
    form["ctl00_MainContextPH_tbProjectName"] = f.id
    form["ctl00_MainContextPH_tbQuantity"] = quantity
    form["ctl00_MainContextPH_tbProjectDetails"] = collect_orders_string
    # projectNameField = page.input_with(dom_id: "ctl00_MainContextPH_tbProjectName")
    # projectNameField.value = "AutoTest"

    # button = page.input_with(dom_id: "ctl00_MainContextPH_bntSubmit")
    # form.submit(button)

    button = form.button(name: 'ctl00$MainContextPH$bntSubmit')
    puts "%%%%%%%%%%%%%%%%%%"
    thankYouPage = form.click_button(button)
    p pageUri = thankYouPage.uri.to_s
  end

end
