'use client';

export const trackContactEvent = () => {
  if (typeof window !== 'undefined' && 'fbq' in window) {
    window.fbq('track', 'Contact');
  }
};
