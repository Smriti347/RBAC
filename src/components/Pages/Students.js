import React from 'react';

const Students = () => {
  return (
    <div className="p-8 bg-blue-400 min-h-screen text-white">
      <h1 className="text-3xl font-bold">Student's Dashboard</h1>
      <p className="mt-4">Welcome, Student! Here you can access study materials and view course-related information.</p>
      <ul className="mt-4 list-disc list-inside">
        <li>Download study resources</li>
        <li>View grades</li>
        <li>Participate in discussions</li>
      </ul>
    </div>
  );
};

export default Students;
