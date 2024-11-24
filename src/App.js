import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Correct import path
import { AuthProvider } from './context/AuthContext'; // Correct path
import Navbar from './components/Layout/Navbar'; // Correct path
import Footer from './components/Layout/Footer'; // Correct path
import Home from './components/Pages/Home'; // Correct path
import Students from './components/Pages/Students'; // Correct path
import Professor from './components/Pages/Professor'; // Correct path
import Visitors from './components/Pages/Visitors'; // Correct path
import Login from './components/Auth/Login'; // Correct path
import Register from './components/Auth/Register'; // Correct path
import ProtectedRoute from './components/Auth/ProtectedRoute'; // Correct path
import NotFound from './components/Pages/NotFound'; // Correct path

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Login and Register Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Public route for Visitors */}
          <Route path="/visitors" element={<Visitors />} />

          {/* Protected route for students */}
          <Route
            path="/students"
            element={
              <ProtectedRoute role="student">
                <Students />
              </ProtectedRoute>
            }
          />

          {/* Protected route for professors */}
          <Route
            path="/professor"
            element={
              <ProtectedRoute role="professor">
                <Professor />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route for NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
};

export default App;
