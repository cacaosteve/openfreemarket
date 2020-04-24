class AddShopPubKeyAndBuyerPubKeyToMultisigTransaction < ActiveRecord::Migration[5.0]
  def change
    add_column :multisig_transactions, :shop_pub_key, :text
    add_column :multisig_transactions, :buyer_pub_key, :text
  end
end
