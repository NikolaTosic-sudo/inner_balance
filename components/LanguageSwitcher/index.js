import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectButton, SelectContainer } from './style';
import { useSearchParams } from 'next/navigation';

const LanguageSwitch = () => {
  const { i18n } = useTranslation('common');
  const [language, setLanguage] = useState('me');
  const searchParams = useSearchParams()

  useEffect(() => {
    const lang = searchParams.get("lang")
    if (typeof window !== 'undefined' && lang) {
      localStorage.setItem('lang', lang);
      i18n.changeLanguage(lang ?? 'me');
      setLanguage(lang)
    } else if (typeof window !== 'undefined') {
      const value = localStorage.getItem('lang');
      i18n.changeLanguage(value ?? 'me');
      setLanguage(value)
    }
  }, [i18n, searchParams]);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <SelectContainer>
      <SelectButton onChange={handleLanguageChange} value={language}>
        <option value="en">🇺🇸</option>
        <option value="me">🇲🇪</option>
      </SelectButton>
    </SelectContainer>
  );
};

export default LanguageSwitch;
