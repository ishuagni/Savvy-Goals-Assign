class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.decimal :amount, null: false
      t.datetime :goal_target_date, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
