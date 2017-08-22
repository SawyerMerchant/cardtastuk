ActiveAdmin.register Invitation do
permit_params :first_name, :last_name, :email, :cell_number, :admin_user_id

# form partial: 'form'

# form do |f|
#   # f.input name: 'authenticity_token', type: :hidden, value: form_authenticity_token.to_s
#   # f.input type: :hidden, value: :current_admin_user.id
#   f.input type: :first_name
#   f.input type: :last_name
#   f.input type: :email
#   f.input type: :cell_number
#   f.input type: :submit
# end

form title: 'Invite Someone' do |f|
    inputs 'Details' do
      input :first_name
      input :last_name
      input :email
      input :cell_number
      input :admin_user_id, input_html: { value: current_admin_user.id}, as: :hidden

    end
    panel 'About' do
      "The following can be used in the content below..."
    end
    para "Press cancel to return to the list without sending."
    actions
  end


end
