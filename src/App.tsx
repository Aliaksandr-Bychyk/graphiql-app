import { FC } from 'react';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: FC = () => (
  <>
    <Header />
    <Welcome />
    <Footer />
  </>
);

export default App;
