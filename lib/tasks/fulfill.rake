require 'rubygems'
require 'bundler/setup'
require 'mechanize'

task :fulfill => :environment do

  agent = Mechanize.new
  page = agent.get('http://mypfl.com/?A=SAWY35450&K=7436227379')

  p pageUri = page.uri.to_s
  Tag.new(name: pageUri).save


  quoteButton = page.link_with(dom_id: "ctl00_MainContextPH_HyperLink1")

  quoteUrl = quoteButton.href
  newPage = agent.get(quoteUrl)
  p newPageUri = newPage.uri.to_s
  Tag.new(name: newPageUri).save

  # projectNameField = input_with(dom_id: "ctl00_MainContextPH_tbProjectName")
  # projectNameField.value = "Test"
  # 

end
task :fulfill
