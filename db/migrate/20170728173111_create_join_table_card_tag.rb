class CreateJoinTableCardTag < ActiveRecord::Migration[5.0]
  def change
    # drop_table :cards_tags
    # drop_table :Cards_Tags

    create_join_table :cards, :tags do |t|
      t.index [:card_id, :tag_id]
      # t.index [:tag_id, :card_id]
    end
  end
end
