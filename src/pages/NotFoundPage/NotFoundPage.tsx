import { FC } from 'react';
import Button from '../../components/Buttons/Button/Button';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage: FC = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Oops! The page can&apos;t be found</h2>
        <Button className={'not-found__btn'}>
          <Link to="/">Back to the Welcome Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
