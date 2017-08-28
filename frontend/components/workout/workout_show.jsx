import React from 'react';

class WorkoutShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="workout-show-main">
        <h3 className="workout-show-title">{this.props.selectedWorkout.name}</h3>
      </div>
    );
  }

}

export default WorkoutShow;
