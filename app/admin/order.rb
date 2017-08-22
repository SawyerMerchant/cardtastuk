ActiveAdmin.register Order do
  permit_params :user_id

  controller do
    def scoped_collection
      if (current_admin_user.role == "member")
        return Order.joins('JOIN users ON orders.user_id = users.id').
              where("users.admin_user_id = #{current_admin_user.id}")
      end
      if (current_admin_user.role == "leader")
        return Order.joins('JOIN users ON orders.user_id = users.id').
              where("users.organization_id = #{current_admin_user.organization_id}")
      end
      if (current_admin_user.role == "rep")

      end

      if (current_admin_user.role == "owner")
        return Order.all
      end
    end
  end

  index do
    id_column
    column :user do |order|
      link_to order.user.email, admin_user_path(order.user)
    end if can? :read, User
    column :status
    column "Amount", :back_charge do |order|
      "$#{'%.2f' % (order.back_charge/100.0)}"
    end
    column :created_at
    column :fulfillment if can? :manage, Fulfillment
    actions
  end

  show do
    attributes_table do
      row :user do |order|
        link_to order.user.email, admin_user_path(order.user)
      end if can? :read, User
      row :status
      row :created_at
      row "Amount", :back_charge do |order|
        "$#{'%.2f' % (order.back_charge/100.0)}"
      end
      row :fulfillment if can? :manage, Fulfillment
    end
    active_admin_comments
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
