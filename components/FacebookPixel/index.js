'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL;

export default function FacebookPixel() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.fbq =
        window.fbq ||
        function () {
          (window.fbq.q = window.fbq.q || []).push(arguments);
        };
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'Contact');
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `,
        }}
      />
    </>
  );
}
