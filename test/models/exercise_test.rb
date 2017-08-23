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

require 'test_helper'

class ExerciseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
