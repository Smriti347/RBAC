import React from 'react';

const Professor = () => {
  return (
    <div className="p-8 bg-secondary min-h-screen text-white">
      <h1 className="text-3xl font-bold">Professor Dashboard</h1>
      <p>Welcome to the Professor Dashboard! Manage your classes, upload materials, and grade assignments.</p>

      <div className="mt-4 space-y-4">
        <div className="p-4 bg-primary rounded">
          <h2 className="text-xl font-semibold">View Schedule</h2>
          <p>Check your weekly teaching schedule and upcoming lectures.</p>
        </div>
        <div className="p-4 bg-primary rounded">
          <h2 className="text-xl font-semibold">Upload Materials</h2>
          <p>Provide course resources for your students.</p>
        </div>
        <div className="p-4 bg-primary rounded">
          <h2 className="text-xl font-semibold">Manage Grades</h2>
          <p>Grade assignments and quizzes submitted by students.</p>
        </div>
      </div>
    </div>
  );
};

export default Professor;
