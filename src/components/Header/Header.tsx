import { FC, useEffect } from 'react';
import Button from '../Buttons/Button/Button';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/context/AuthContext';

const Header: FC = () => {
  const userStore = useUserAuth();
  const navigate = useNavigate();

  function logOut() {
    userStore?.logout();
    navigate('/sign-in');
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

        {userStore?.loading ? (
          <p className="app-loading">Loading...</p>
        ) : (
          <>
            {userStore?.user ? (
              <div className="header__buttons">
                <Button>
                  <Link to="/editor">Editor</Link>
                </Button>
                <Button onClick={logOut}>Sign out</Button>
              </div>
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
