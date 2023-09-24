import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //dev-hcc4ojgr73drepam.us.auth0.com
  //5xmTLdqAbuvtJmvlHSCv9r4pV2y6eCLb
  <React.StrictMode>
    <Auth0Provider
        domain='dev-hcc4ojgr73drepam.us.auth0.com'
        clientId='5xmTLdqAbuvtJmvlHSCv9r4pV2y6eCLb'
        redirectUri={window.location.origin}>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
