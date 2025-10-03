import { createContext } from 'react';

export interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
