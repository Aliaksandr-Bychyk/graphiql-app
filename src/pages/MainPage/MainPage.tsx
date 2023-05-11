import { FC, useState } from 'react';
import Editor from './../../components/Editor/Editor';
import './MainPage.scss';

const MainPage: FC = () => {
  const [operationValue, setOperationValue] = useState<string>('');

  return (
    <div className="main">
      <div className="container">
        <Editor title={'Operation'} onChange={setOperationValue} value={operationValue} />
      </div>
    </div>
  );
};

export default MainPage;
