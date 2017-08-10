require 'rubygems'
require 'bundler/setup'
require 'mechanize'

task :fulfill => :environment do

  agent = Mechanize.new
  page = agent.get('http://mypfl.com/?A=SAWY35450&K=7436227379')

  p pageUri = page.uri.to_s
  # Tag.new(name: pageUri).save


  quoteButton = page.link_with(dom_id: "ctl00_MainContextPH_HyperLink1")

  quoteUrl = quoteButton.href
  page = agent.get(quoteUrl)
  p pageUri = page.uri.to_s
  # Tag.new(name: newPageUri).save
  ###########################################

  form = page.form(name: "aspnetForm")
  p form.buttons.length
  # form.set_attribute
  # form["ctl00_MainContextPH_tbProjectName"] = "AutoTestID"
  form["ctl00$MainContextPH$tbProjectName"] = "AutoTestName"
  # projectNameField = page.input_with(dom_id: "ctl00_MainContextPH_tbProjectName")
  # projectNameField.value = "AutoTest"

  # button = page.input_with(dom_id: "ctl00_MainContextPH_bntSubmit")
  # form.submit(button)

  button = form.button(name: 'ctl00$MainContextPH$bntSubmit')
  puts "%%%%%%%%%%%%%%%%%%"
  thankYouPage = form.click_button(button)
  p pageUri = thankYouPage.uri.to_s

end
task :fulfill
