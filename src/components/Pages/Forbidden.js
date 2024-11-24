import React from 'react';

const Forbidden = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">403 - Forbidden</h1>
      <p className="text-lg mt-4 text-gray-600">
        You do not have permission to access this page.
      </p>
    </div>
  );
};

export default Forbidden;
