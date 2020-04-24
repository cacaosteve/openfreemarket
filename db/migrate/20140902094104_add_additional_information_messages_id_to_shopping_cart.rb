class AddAdditionalInformationMessagesIdToShoppingCart < ActiveRecord::Migration[5.0]
  def change
    add_column :shopping_carts, :additional_information_message_id, :integer
  end
end
