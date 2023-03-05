import React, { useState, useEffect } from 'react';
import { FaDumbbell, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getData } from '../services/dataService';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, []);

  return (
    <div className="bg-gray-100 py-20 px-4">
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg p-6 md:p-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Workouts</h1>
          <Link to="/create" className="flex items-center text-gray-800 hover:text-gray-900">
            <FaPlus className="mr-1" /> Add Workout
          </Link>
        </div>
        {data.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(item => (
              <li key={item._id} className="bg-gray-200 rounded-lg overflow-hidden">
                <Link to={`/detail/${item._id}`} className="block">
                  <div className="h-40 bg-gray-400"></div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                    <div className="flex items-center text-gray-600">
                      <FaDumbbell className="mr-1" /> {item.exercises.length} exercises
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-600">No workouts found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
