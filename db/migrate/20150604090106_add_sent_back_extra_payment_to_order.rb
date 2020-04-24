class AddSentBackExtraPaymentToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :sent_back_extra_payment, :boolean, default: false
  end
end
