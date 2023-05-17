import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
