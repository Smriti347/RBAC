import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import { getUserFromDatabase } from '../../utils/database'; // Import database utility

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate user credentials
    const user = getUserFromDatabase(formData.username);

    if (user) {
      if (user.password === formData.password) {
        // Store user info in sessionStorage for session handling
        sessionStorage.setItem('user', JSON.stringify(user));
        navigate('/dashboard'); // Redirect to dashboard or home page
      } else {
        setError('Incorrect password');
      }
    } else {
      setError('User not found');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-5">
      <div className="p-8 bg-blue-50 border-4 border-[#001f3d] rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#001f3d] text-center mb-6">Login</h1>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-[#001f3d] text-white rounded-lg hover:bg-[#87CEEB] hover:text-[#001f3d] mt-4"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-blue-500 hover:underline"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
