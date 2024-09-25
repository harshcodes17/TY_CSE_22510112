import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './sign-in/SignIn';
import Dashboard from './Dashboard';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;