import { FC } from 'react';
import Editor from './../../components/Editor/Editor';
import './MainPage.scss';

const MainPage: FC = () => {
  const onChange = () => {};
  return (
    <div className="main">
      <div className="container">
        <Editor title={'Operation'} handleChange={onChange} value={'hello'} />
      </div>
    </div>
  );
};

export default MainPage;
