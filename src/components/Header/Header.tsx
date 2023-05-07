import { FC, useEffect } from 'react';
import Button from '../Buttons/Button/Button';
import './Header.scss';

const Header: FC = () => {
  const isUserAuth = true;

  useEffect(() => {
    window.onscroll = () => {
      const currentScroll = window.pageYOffset;
      const header = document.querySelector('header') as HTMLElement;
      currentScroll > 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
  }, []);

  return (
    <header className="header">
      <div className="container header__container">
        <select className="header__lang">
          <option value="en" defaultChecked>
            EN
          </option>
          <option value="ru">RU</option>
        </select>
        {isUserAuth ? (
          <div className="header__buttons">
            <Button>Sign up</Button>
            <Button>Sign in</Button>
          </div>
        ) : (
          <Button>Sign out</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
