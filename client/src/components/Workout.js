import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Workout extends Component {
  render() {
    const { workout } = this.props;

    return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-2">{workout.name}</h2>
        <p className="text-gray-600 mb-4">{workout.description}</p>
        <p className="text-gray-600 italic">{workout.date}</p>
      </div>
    );
  }
}

Workout.propTypes = {
  workout: PropTypes.object.isRequired
};

export default Workout;

