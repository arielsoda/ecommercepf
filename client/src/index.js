import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {Auth0Provider} from "@auth0/auth0-react";

import './index.css';

import App from './App';
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-pablobustos.us.auth0.com" clientId="4tyX5Wzf6PRW6PmK4u4VvlJR88smLmZj" redirectUri={window.location.origin}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

