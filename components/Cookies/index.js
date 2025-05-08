"use client";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const CookiesContent = () => {
  const { t } = useTranslation();

  return (
    <CookieConsent buttonText={t("cookies.button")} buttonStyle={{ lineHeight: 1 }}>
      {t("cookies.text")}
    </CookieConsent>
  );
};

const Cookies = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR issues

  return <CookiesContent />
}

export default Cookies;