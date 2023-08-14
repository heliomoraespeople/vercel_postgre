import { Configuration, PopupRequest } from '@azure/msal-browser';

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: 'f51cf890-caeb-4414-b10a-64c6ba0f9f26', //id do aplicativo (cliente)
    authority:
      'https://login.microsoftonline.com/f8c68086-b95c-49cb-9d38-ed37940abef5', //id do diretório
    redirectUri: '/',
    postLogoutRedirectUri: '/'
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ['User.Read']
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft-ppe.com/v1.0/me'
};
