import React from 'react';

const Visitors = () => {
  return (
    <div className="p-8 bg-green-500 min-h-screen text-white">
      <h1 className="text-3xl font-bold">Visitor's Page</h1>
      <p className="mt-4">Welcome, Visitor! You can explore general information about the college here.</p>
      <ul className="mt-4 list-disc list-inside">
        <li>About the College</li>
        <li>Contact Information</li>
        <li>Upcoming Events</li>
      </ul>
    </div>
  );
};

export default Visitors;
