import { FC } from 'react';
import Button from '../Buttons/Button/Button';
import './Header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__buttons">
          <Button>Sign up</Button>
          <Button>Sign in</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
