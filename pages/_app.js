import Layout from '../components/Layout'
import '../styles/fonts.css';
import '../styles/globals.css'
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import { initGA, logPageView } from '../gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    initGA();
    logPageView();
    const handleRouteChange = () => {
      logPageView();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return(
    <Auth0ProviderWithHistory>
      <Layout>
          <Component {...pageProps}/>
      </Layout>
    </Auth0ProviderWithHistory>
  )
    
}

export default MyApp
