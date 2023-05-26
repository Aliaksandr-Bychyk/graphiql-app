import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Buttons/Button/Button';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <div className="container">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">{t('404phrase')}</h2>
        <Button className={'not-found__btn'}>
          <Link to="/">{t('404Btn')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
