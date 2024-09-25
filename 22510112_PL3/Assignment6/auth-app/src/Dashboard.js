import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext'; // Import useAuthContext

const Dashboard = () => {
  const { logout } = useAuthContext(); // Use useAuthContext
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogout = () => {
    logout();
    navigate('/'); // Navigate to sign-in page
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;