import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './app/store/index';
import App from './App';
import Theme from './common/styles/themeCustomization';
import { ApolloProvider } from '@apollo/client';
import client from './app/graphql/apollo-client';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Theme> 
          <App />
         </Theme>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);