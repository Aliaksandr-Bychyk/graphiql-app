import { FC, useEffect, useState } from 'react';
import Button from '../Buttons/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/context/AuthContext';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '@/routes/route';
import './Header.scss';

const Header: FC = () => {
  const userStore = useUserAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  function logOut() {
    userStore?.logout();
    navigate(RoutePath.LOGIN);
  }

  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'en');

  useEffect(() => {
    window.onscroll = () => {
      const currentScroll = window.pageYOffset;
      const header = document.querySelector('header') as HTMLElement;
      currentScroll > 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <header className="header">
      <nav className="container header__container">
        <select
          className="header__lang"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en" defaultChecked>
            {t('langEN')}
          </option>
          <option value="ru">{t('LangRU')}</option>
        </select>

        {userStore?.loading ? (
          <p className="app-loading">{t('Loading')}</p>
        ) : (
          <>
            {userStore?.user ? (
              <div className="header__buttons">
                <Button>
                  <Link to={RoutePath.EDITOR}>{t('Editor')}</Link>
                </Button>
                <Button onClick={logOut}>{t('SignOut')}</Button>
              </div>
            ) : (
              <div className="header__buttons">
                <Button onClick={() => navigate(RoutePath.SIGN_UP)}>{t('SignUp')}</Button>
                <Button onClick={() => navigate(RoutePath.LOGIN)}>{t('SignIn')}</Button>
              </div>
            )}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
