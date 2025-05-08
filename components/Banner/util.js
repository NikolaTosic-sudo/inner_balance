export const checkBanner = (router) => {
  const hiddenPages = ['/contact', '/bars', '/belly'];

  if (hiddenPages.includes(router.pathname)) {
    return false;
  } else {
    return true;
  }
};
