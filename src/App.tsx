import { FC } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <div style={{ height: '500px' }}>page</div>
      <Footer />
    </>
  );
};

export default App;
