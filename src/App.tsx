import { FC } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthRegPage from './/pages/AuthRegPage/AuthRegPage';

const App: FC = () => (
  <>
    <Header />
    <AuthRegPage />
    <Footer />
  </>
);

export default App;
