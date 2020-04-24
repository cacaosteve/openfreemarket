class AddFeedbackCommentAndRatingToPurchase < ActiveRecord::Migration[5.0]
  def change
    add_column :purchases, :feedback_comment, :string
    add_column :purchases, :rating, :integer, default: 0
  end
end
