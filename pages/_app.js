import Layout from '../components/Layout'
import '../styles/fonts.css';
import '../styles/globals.css'
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';


function MyApp({ Component, pageProps }) {
  return(
    <Auth0ProviderWithHistory>
      <Layout>
          <Component {...pageProps}/>
      </Layout>
    </Auth0ProviderWithHistory>
  )
    
}

export default MyApp
