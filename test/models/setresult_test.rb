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

require 'test_helper'

class SetresultTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
