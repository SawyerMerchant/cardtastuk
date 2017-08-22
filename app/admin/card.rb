ActiveAdmin.register Card do
  permit_params :name, :large_img_url, :medium_img_url, :small_img_url, :default_greeting, :orientation, :size, :category_id, :price_id, :aws_image



  form title: "New Card" do |f|
    f.inputs do
      f.input :name
      f.input :aws_image, required: true, as: :file
      f.input :default_greeting
      f.input :orientation
      f.input :size
      f.input :category
      f.input :tags
      f.input :price
    end
    f.actions
  end

end
