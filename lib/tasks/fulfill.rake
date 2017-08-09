require 'rubygems'
require 'bundler/setup'
require 'mechanize'

task :fulfill => :environment do

  agent = Mechanize.new
  page = agent.get('http://mypfl.com/?A=SAWY35450&K=7436227379')

  #button id
  ctl00_MainContextPH_img2

  button = page.image_with(:id "ctl00_MainContextPH_img2")
  button.click


  puts page.title



end
task :fulfill
