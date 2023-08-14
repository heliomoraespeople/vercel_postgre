import { ReactNode } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import PrimaryLayout from '../src/layouts/primary/PrimaryLayout';

import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate
} from '@azure/msal-react';
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  PublicClientApplication
} from '@azure/msal-browser';
import { loginRequest, msalConfig } from '../src/utils/authConfig';

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  // MSAL configuration
  const msalInstance = new PublicClientApplication(msalConfig);

  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: EventMessage) => {
    console.log('addEventCallback', event);
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      console.log('LOGIN_SUCCESS');

      const payload = event.payload as AuthenticationResult;
      const account = payload.account;
      msalInstance.setActiveAccount(account);
    }
    if (event.eventType === EventType.INITIALIZE_END) {
      const accountOn = msalInstance.getAllAccounts();
      if (accountOn && accountOn.length == 0) {
        handleLogin('redirect');
      }
    }
  });

  const handleLogin = (loginType: string) => {
    if (loginType === 'popup') {
      msalInstance?.loginPopup(loginRequest);
    } else if (loginType === 'redirect') {
      msalInstance?.loginRedirect(loginRequest);
    }
  };

  return (
    <MsalProvider instance={msalInstance}>
      <AuthenticatedTemplate>
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div>deslogado</div>
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
};
export default App;
