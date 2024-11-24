import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse sm:flex-row items-center bg-white text-[#001f3d]">
      {/* Left section with text */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold">Welcome to the College Portal</h1>
        <p className="mt-4 text-lg">
          This is the central hub for all users of the college: professors, students, visitors, and more!
        </p>
        <div className="mt-6 flex space-x-4">
          {/* Login button */}
          <Link
            to="/login"
            className="block px-4 py-2 bg-[#001f3d] text-center rounded-lg text-white text-sm hover:bg-[#87CEEB] hover:text-[#001f3d] w-auto"
          >
            Login
          </Link>
          {/* Register button */}
          <Link
            to="/register"
            className="block px-4 py-2 bg-[#001f3d] text-center rounded-lg text-white text-sm hover:bg-[#87CEEB] hover:text-[#001f3d] w-auto"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Right section with an image */}
      <div className="flex-1 p-4">
        <img
          src="/assets/college.jpg" // Replace with your image in the assets folder
          alt="College"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
