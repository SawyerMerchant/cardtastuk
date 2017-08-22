ActiveAdmin.register User do
  menu label: "My Customers"

  controller do
    def scoped_collection
      if (current_admin_user.role == "member")
        return User.where(admin_user_id: current_admin_user.id).distinct
      end
      if (current_admin_user.role == "leader")
        return User.where(organization_id: current_admin_user.organization_id)
      end
      if (current_admin_user.role == "rep")

      end

      if (current_admin_user.role == "owner")
        return User.all
      end
    end
  end

  index do
    id_column
    column :created_at
    column :email
  end

  show do
    attributes_table do
      row :created_at
      row :email
    end
  end

end
