import { useRouter } from 'next/router';
import { useEffect } from 'react';

function ScrollToTopOnRouteChange() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const targetElement = document.getElementById('toScrollTop');
      targetElement.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}

export default ScrollToTopOnRouteChange;
