# == Schema Information
#
# Table name: workouts
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Workout < ApplicationRecord
  validates :user, presence: true

  belongs_to :user
  has_many :exercises
  
  accepts_nested_attributes_for :exercises
end
