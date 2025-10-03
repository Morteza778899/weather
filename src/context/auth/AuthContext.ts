import { createContext } from 'react';

export interface AuthContextType {
  username: string | null;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const STORAGE_KEY = 'weather_app_user';
