import { FC, useEffect, useState } from 'react';
import Button from '../Buttons/Button/Button';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/context/AuthContext';

const Header: FC = () => {
  const store = useUserAuth();
  const navigate = useNavigate();

  function logOut() {
    store?.logout();
  }

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

        {store?.loading ? (
          <p style={{ color: '#fff' }}>Loading...</p>
        ) : (
          <>
            {store?.user ? (
              <Button onClick={logOut}>Sign out</Button>
            ) : (
              <div className="header__buttons">
                <Button onClick={() => navigate('/sign-up')}>Sign up</Button>
                <Button onClick={() => navigate('/sign-in')}>Sign in</Button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
