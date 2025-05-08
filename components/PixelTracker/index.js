'use client';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

const PixelTracker = () => {
  useEffect(() => {
    if (window) {
      const pixelId = '1184405803101934';
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }
  }, []);
  return null;
};
export default PixelTracker;
