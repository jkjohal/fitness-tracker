import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AddWorkout.css';
import WorkoutChart from '../pages/WorkoutChart';

function AddWorkout() {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [water, setWater] = useState('');

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleWaterChange = (e) => {
    setWater(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className="add-workout-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Logout</Link>
      </div>
      <div className="add-workout-main">
        <div className="add-workout-form">
          <h1>Log Your Workout</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="exercise">Exercise</label>
            <input
              type="text"
              id="exercise"
              name="exercise"
              value={exercise}
              onChange={handleExerciseChange}
              required
            />
            <label htmlFor="duration">Duration (minutes)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={duration}
              onChange={handleDurationChange}
              required
            />
            <label htmlFor="calories">Calories Burned</label>
            <input
              type="number"
              id="calories"
              name="calories"
              value={calories}
              onChange={handleCaloriesChange}
              required
            />
            <label htmlFor="water">Water Intake (ounces)</label>
            <input
              type="number"
              id="water"
              name="water"
              value={water}
              onChange={handleWaterChange}
              required
            />
            <button type="submit">Log Workout</button>
          </form>
        </div>
        <div className="add-workout-chart">
          <WorkoutChart />
        </div>
      </div>
      <div className="footer">&copy; 2023 Fitness Tracker</div>
    </div>
  );
}

export default AddWorkout;
