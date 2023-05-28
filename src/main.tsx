import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.scss';
import { AuthContextProvider } from './context/AuthContext.tsx';
import './i18n/i18n';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ApolloProvider>
);
