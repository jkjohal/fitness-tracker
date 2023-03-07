import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/workoutActions';
import Workout from './Workout';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    const { workouts } = this.props.workout;

    return (
      <div>
        <h2>Workouts</h2>
        {workouts.map(workout => (
          <Workout key={workout._id} workout={workout} />
        ))}
      </div>
    );
  }
}

Dashboard.propTypes = {
  getWorkouts: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  workout: state.workout
});

export default connect(mapStateToProps, { getWorkouts })(Dashboard);

