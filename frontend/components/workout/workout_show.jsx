import React from 'react';

class WorkoutShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    debugger
    return (
      <div>
        <h3>{this.props.selectedWorkout.name}</h3>
      </div>
    );
  }

}

export default WorkoutShow;
