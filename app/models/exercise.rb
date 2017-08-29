# == Schema Information
#
# Table name: exercises
#
#  id            :integer          not null, primary key
#  workout_id    :integer          not null
#  exercise_name :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Exercise < ApplicationRecord
  validates :exercise_name, presence: true

  has_many :setresults, dependent: :destroy

  has_many :workouts,
   through: :setresults

  accepts_nested_attributes_for :setresults
end
