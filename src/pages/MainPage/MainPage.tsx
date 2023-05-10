import { FC } from 'react';
import Editor from './../../components/Editor/Editor';
import './MainPage.scss';

const MainPage: FC = () => {
  return (
    <div className="main">
      <div className="container">
        <Editor title={'Operation'} />
      </div>
    </div>
  );
};

export default MainPage;
