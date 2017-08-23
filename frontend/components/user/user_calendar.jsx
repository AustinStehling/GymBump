let row1;
let row2;
let row3;
let row4;

if (allWorkouts.length > 28) {
  row1 = allWorkouts.slice(allWorkouts.length - 28).
    map(workout => <td className="li-workout-list" key={workout.id}>
                                                      {workout.created_at.slice(5,10)}
                                                      {workout.name}</td>)
  row2 = allWorkouts.slice(allWorkouts.length - 21).
    map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
  row3 = allWorkouts.slice(allWorkouts.length - 14).
    map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
  row4 = allWorkouts.slice(allWorkouts.length - 7).
    map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
  } else {
    row1 = allWorkouts.slice(0, 7).
      map(workout => <td className="li-workout-list" key={workout.id}>
                                                      <h3>{workout.created_at.slice(5,10)}</h3>
                                                          {workout.name}</td>)
    row2 = allWorkouts.slice(7, 14).
      map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
    row3 = allWorkouts.slice(14, 21).
      map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
    row4 = allWorkouts.slice(21, 28).
      map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
  }


<table className="ul-workout-list">
  <tbody>
    <tr>
      {row1}
    </tr>
    <tr>
      {row2}
    </tr>
    <tr>
      {row3}
    </tr>
    <tr>
      {row4}
    </tr>
  </tbody>
</table>
