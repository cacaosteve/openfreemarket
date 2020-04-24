class AddAdditionalInformationMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :purchases, :additional_information_message, :text
  end
end
