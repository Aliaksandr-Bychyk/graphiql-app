import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { AuthContextProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
