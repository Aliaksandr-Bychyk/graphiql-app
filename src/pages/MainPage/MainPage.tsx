import { FC, useState } from 'react';
import Editor from './../../components/Editor/Editor';
import './MainPage.scss';
import DocsWindow from '@/components/Docs/DocsWindow/DocsWindow';

const MainPage: FC = () => {
  const [operationValue, setOperationValue] = useState<string>('');
  const [variablesValue, setVariablesValue] = useState<string>('');
  const [headersValue, setHeadersValue] = useState<string>('');

  const [isVar, setIsVar] = useState<boolean>(true);

  return (
    <div className="main">
      <div className="container main__container">
        <div className="main__documentation">
          <DocsWindow />
        </div>
        <div className="main__editors">
          <Editor title={'Operation'} onChange={setOperationValue} value={operationValue} />
          {isVar ? (
            <Editor title={'Variables'} onChange={setVariablesValue} value={variablesValue} />
          ) : (
            <Editor title={'Headers'} onChange={setHeadersValue} value={headersValue} />
          )}
        </div>
        <div className="main__response">response</div>
      </div>
    </div>
  );
};

export default MainPage;
