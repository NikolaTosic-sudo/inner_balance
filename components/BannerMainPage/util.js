export const checkBanner = (router) => {
  const hiddenPages = ['/belly', '/contact'];

  if (hiddenPages.includes(router.pathname)) {
    return false;
  } else {
    return true;
  }
};
