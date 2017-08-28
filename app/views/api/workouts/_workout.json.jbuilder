json.extract! workout, :id, :name, :created_at

json.setresults do
  workout.setresults.each do |setresult|
    json.set! setresult.id do
      json.partial! 'api/setresults/setresult', setresult: setresult
    end
  end
end
