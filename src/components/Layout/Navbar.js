import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ userRole }) => {
  return (
    <nav className="bg-[#001f3d] p-4">
      <ul className="flex justify-center space-x-8">
        {/* Common link visible to all users */}
        <li>
          <Link
            to="/"
            className="text-white font-semibold text-lg py-2 px-4 hover:bg-[#87CEEB] hover:text-[#001f3d] rounded"
          >
            Home
          </Link>
        </li>

        {/* Login/Register links visible to unauthenticated users */}
        {!userRole && (
          <>
            <li>
              <Link
                to="/login"
                className="text-white font-semibold text-lg py-2 px-4 hover:bg-[#87CEEB] hover:text-[#001f3d] rounded"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-white font-semibold text-lg py-2 px-4 hover:bg-[#87CEEB] hover:text-[#001f3d] rounded"
              >
                Register
              </Link>
            </li>
          </>
        )}

        {/* Links visible for "Visitors" role */}
        {userRole === 'visitor' && (
          <>
            <li>
              <Link
                to="/visitors"
                className="text-white font-semibold text-lg py-2 px-4 hover:bg-[#87CEEB] hover:text-[#001f3d] rounded"
              >
                Visitors
              </Link>
            </li>
          </>
        )}

        {/* Links visible for "Student" role */}
        {userRole === 'student' && (
          <>
            <li>
              <Link
                to="/students"
                className="text-white font-semibold text-lg py-2 px-4 hover:bg-[#87CEEB] hover:text-[#001f3d] rounded"
              >
                Students
              </Link>
            </li>
          </>
        )}

        {/* Links visible for "Professor" role */}
        {userRole === 'professor' && (
          <>
            <li>
              <Link
                to="/professor"
                className="text-white font-semibold text-lg py-2 px-4 hover:bg-[#87CEEB] hover:text-[#001f3d] rounded"
              >
                Professor
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
