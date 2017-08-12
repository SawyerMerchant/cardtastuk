class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  def attachable_type=(class_name)
     super(class_name.constantize.base_class.to_s)
  end
end
