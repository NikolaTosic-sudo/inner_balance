'use client';
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';

const CloseOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.CloseOutlined),
  { ssr: false }
);
import Link from 'next/link';
import { LangWrap, MenuButton, MenuNav, MenuWrap } from './style';
import LanguageSwitch from '../../LanguageSwitcher';
const PixelTracker = dynamic(() => import('../../PixelTracker'), {
  ssr: false,
});

const Menu = () => {
  const urlParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation('common');
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const lang = urlParams.get('language');

    if (lang && i18n) {
      i18n.changeLanguage(lang);
    }
  }, [urlParams, i18n]);

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        handleClose();
      }
    };

    const handleSwipe = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchend', handleSwipe);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchend', handleSwipe);
    };
  }, [isVisible]);

  return (
    <>
      <PixelTracker />
      <header id="header">
        <Link href="/" className="logo">
          Inner Balance <span>by Dijana Tesla</span>
        </Link>
        <nav>
          <MenuWrap>
            <LangWrap>
              <LanguageSwitch />
            </LangWrap>
            <ul>
              <MenuButton>
                <div ref={toggleRef} onClick={toggleMenu}>
                  Menu
                </div>
              </MenuButton>
            </ul>
          </MenuWrap>
        </nav>
      </header>

      <MenuNav id="menu" ref={menuRef} visible={isVisible ? 'true' : undefined}>
        <CloseOutlined
          onClick={handleClose}
          style={{ textAlign: 'right' }}
        ></CloseOutlined>
        <ul className="links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/bars">Access Bars</Link>
          </li>
          <li>
            <Link href="/belly">Belly Revolution</Link>
          </li>
          <li>
            <Link href="/contact">{t('menu.schedule')}</Link>
          </li>
        </ul>
      </MenuNav>
    </>
  );
};

export default Menu;
