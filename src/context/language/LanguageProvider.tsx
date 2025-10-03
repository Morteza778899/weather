import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from './LanguageContext';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language || 'en');

  const setLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
    // Update document direction based on language
    document.dir = lang === 'fa' ? 'rtl' : 'ltr';
    // Store the language preference
    localStorage.setItem('i18nextLng', lang);
    // Force page refresh to apply RTL/LTR changes
    window.location.reload();
  }, [i18n]);

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'en' ? 'fa' : 'en';
    setLanguage(newLang);
  }, [language, setLanguage]);

  useEffect(() => {
    // Set initial direction
    document.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, []);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
