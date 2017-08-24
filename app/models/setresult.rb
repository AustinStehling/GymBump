# == Schema Information
#
# Table name: setresults
#
#  id            :integer          not null, primary key
#  weight_lifted :integer
#  weight_unit   :string
#  reps          :integer
#  distance      :integer
#  distance_unit :string
#  duration      :time
#  exercise_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Setresult < ApplicationRecord
  validates :exercise, presence: true

  belongs_to :exercise

  
end
