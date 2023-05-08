import { FC } from 'react';
import Button from '../../components/Buttons/Button/Button';
import './404Page.scss';

const NotFoundPage: FC = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Oops! The page can&apos;t be found</h2>
        <Button className={'not-found__btn'}>Back to the Welcome Page</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
