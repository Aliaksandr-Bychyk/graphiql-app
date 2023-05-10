import { FC, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { isUser } from './services/firebase';

const App: FC = () => {
  useEffect(() => {
    isUser();

    return () => isUser();
  });

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
