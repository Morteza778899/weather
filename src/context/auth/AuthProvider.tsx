import { ReactNode, useEffect, useState } from 'react';
import { AuthContext, STORAGE_KEY } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [username, setUsername] = useState<string | null>(() => {
    // Initialize state from localStorage
    const savedUser = localStorage.getItem(STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // Update localStorage when username changes
    if (username) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(username));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [username]);

  const login = (name: string) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
