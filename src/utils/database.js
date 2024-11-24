const DATABASE_KEY = 'userDatabase';

// Fetch user database from localStorage
const fetchDatabase = () => {
  const db = localStorage.getItem(DATABASE_KEY);
  return db ? JSON.parse(db) : [];
};

// Save updated database to localStorage
const saveDatabase = (db) => {
  localStorage.setItem(DATABASE_KEY, JSON.stringify(db));
};

// Add user to the database
export const addUserToDatabase = (user) => {
  const db = fetchDatabase();

  if (db.some((existingUser) => existingUser.username === user.username)) {
    return false;
  }

  const userWithRole = { ...user, role: user.role || 'visitor' }; // Default role as 'student'
  db.push(userWithRole);
  saveDatabase(db);
  return true;
};


// Get a single user by username
export const getUserFromDatabase = (username) => {
  const db = fetchDatabase();
  return db.find((user) => user.username === username) || null;
};

// Get all users
export const getUsersFromDatabase = () => {
  return fetchDatabase();
};

// Save updated user data to the database
export const saveUsersToDatabase = (updatedUsers) => {
  saveDatabase(updatedUsers);
};
