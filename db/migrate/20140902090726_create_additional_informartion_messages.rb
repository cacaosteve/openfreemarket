class CreateAdditionalInformartionMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :additional_informartion_messages do |t|
      t.text :message

      t.timestamps
    end
  end
end
