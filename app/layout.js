'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import HeadComponent from '@/components/Head';
import Cookies from '@/components/Cookies';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import CookieConsent from "react-cookie-consent";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ title, children }) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang={i18n ? i18n.language : 'me'}>
      <title>{title ? title : 'Inner Balance'}</title>
      <meta
        name="description"
        content="Opustite um i telo uz Access Bars tretman i Belly Revolution tehniku! Otkrijte harmoniju, oslobodite stres i poboljšajte energiju uz holistički pristup vašem blagostanju. Rezervišite svoj tretman danas!"
      />
      <HeadComponent title="Inner Balance" />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <I18nextProvider i18n={i18n}>
          <AntdRegistry>
            <Analytics />
            <SpeedInsights />
            <StyledComponentsRegistry>{children} 
              <Cookies />
            </StyledComponentsRegistry>
          </AntdRegistry>
        </I18nextProvider>
      </body>
    </html>
  );
}
