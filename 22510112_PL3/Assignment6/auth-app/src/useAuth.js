import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Hardcoded credentials
    const hardcodedEmail = 'harsh@gmail.com';
    const hardcodedPassword = 'asdf1234';

    if (email === hardcodedEmail && password === hardcodedPassword) {
      setIsAuthenticated(true);
      setUser({ email });
      return true;
    } else {
      setIsAuthenticated(false);
      setUser(null);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
};

export default useAuth;