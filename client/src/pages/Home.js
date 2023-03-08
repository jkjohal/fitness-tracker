import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/addworkout">Add Workout</Link>
          </li>
        </ul>
      </nav>

      <main className="home-main">
        <section className="signup">
          <p><b>Step by step, let's make progress together towards a healthier you.</b></p>
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Sign Up</button>
          </form>
        </section>

        <section className="login">
          <h2>Login</h2>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2023 Fitness Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;




// import React from 'react';
// import '../styles/Home.css';

// function Home() {
//   return (
//     <div className="bg-gray-200">
//       <div className="mx-auto max-w-7xl">
//         <div className="py-12 md:flex md:justify-between md:items-center">
//           <h1 className="text-4xl text-center font-bold text-gray-800 md:text-left md:text-5xl md:max-w-lg">
//             Welcome to the Fitness Tracker!
//           </h1>
//           <div className="mt-8 md:mt-0 md:w-1/3">
//             <div className="px-6 py-8 bg-white shadow-md">
//               <h2 className="text-lg font-medium text-gray-900 mb-4">Login</h2>
//               <form>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="border-gray-400 p-2 w-full"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     className="border-gray-400 p-2 w-full"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//                 >
//                   Login
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="mt-8 md:w-2/3 md:pl-12">
//             <div className="px-6 py-8 bg-white shadow-md">
//               <h2 className="text-lg font-medium text-gray-900 mb-4">Sign up</h2>
//               <form className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     className="border-gray-400 p-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="border-gray-400 p-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     className="border-gray-400 p-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-2">
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password"
//                     name="confirm-password"
//                     id="confirm-password"
//                     className="border-gray-400 p-2 w-full"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//                   >
//                     Sign up
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Home;
  
