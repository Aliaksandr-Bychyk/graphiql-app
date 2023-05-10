import { FC } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';

const App: FC = () => (
  <>
    <Header />
    <MainPage />
    <Footer />
  </>
);

export default App;
