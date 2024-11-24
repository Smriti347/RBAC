import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUsersFromDatabase, saveUsersToDatabase } from '../utils/database'; // import database functions

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if a user is already logged in (persisted in localStorage)
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser); // Set user from localStorage if available
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Persist user info to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user info from localStorage
  };

  const register = (newUserData) => {
    const users = getUsersFromDatabase();
  
    const existingUser = users.find((user) => user.username === newUserData.username);
    if (existingUser) {
      throw new Error('Username already exists');
    }
  
    // Ensure a default role is added
    const userWithRole = { ...newUserData, role: newUserData.role || 'student' };
  
    users.push(userWithRole);
    saveUsersToDatabase(users);
  
    login(userWithRole); // Automatically log in the new user
  };
  

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
