import { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface ILayoutProps {
  page: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ page }) => {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};

export default Layout;
