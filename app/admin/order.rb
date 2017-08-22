ActiveAdmin.register Order do
  permit_params :user_id

  controller do
    def scoped_collection
      if (current_admin_user.role == "member")
        Order.joins('JOIN users ON orders.user_id = users.id').
              where("users.admin_user_id = #{current_admin_user.id}")
      end
      if (current_admin_user.role == "leader")
        Order.joins('JOIN users ON orders.user_id = users.id').
              joins('JOIN organizations ON organizations.id =
                            users.organization_id').
              where("users.organization_id = #{current_admin_user.organization_id}")
      end
      if (current_admin_user.role == "rep")

      end

      if (current_admin_user.role == "owner")
        Order.all
      end
    end
  end

  index do
    id_column
    column :user
    column :status
    column :back_charge
    column :created_at
    column :fulfillment
    actions
  end






# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
