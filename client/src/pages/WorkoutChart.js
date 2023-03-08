import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/WorkoutChart.css';

function WorkoutChart() {
  const canvasRef = useRef(null);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    // fetch weekly workout data
    const fetchWeeklyData = async () => {
      // replace with actual API call to fetch data
      const data = [
        { day: 'Monday', workouts: 2 },
        { day: 'Tuesday', workouts: 1 },
        { day: 'Wednesday', workouts: 0 },
        { day: 'Thursday', workouts: 3 },
        { day: 'Friday', workouts: 2 },
        { day: 'Saturday', workouts: 1 },
        { day: 'Sunday', workouts: 0 },
      ];
      setWeeklyData(data);
    };

    fetchWeeklyData();
  }, []);

  useEffect(() => {
    // create bar graph
    if (canvasRef.current && weeklyData.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const chartData = {
        labels: weeklyData.map((data) => data.day),
        datasets: [
          {
            label: 'Workouts',
            data: weeklyData.map((data) => data.workouts),
            backgroundColor: '#ff69b4',
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      };

      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: options,
      });
    }
  }, [weeklyData]);

  return (
    <div className="workout-chart-container">
      <h1>Workout Chart</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default WorkoutChart;
