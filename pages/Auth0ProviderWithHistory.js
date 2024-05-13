import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-3mur0fltuulgq5cb.us.auth0.com";
  const clientId = "pwFKsJcW70vGEZZDonJfI5dzvD9HtVVI";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={typeof window !== 'undefined' && window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
