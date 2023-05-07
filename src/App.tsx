import { FC } from 'react';
import NorFoundPage from './pages/404Page/404Page';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <NorFoundPage />
      <Footer />
    </>
  );
};

export default App;
