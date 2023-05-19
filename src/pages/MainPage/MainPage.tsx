import { FC, useState } from 'react';
import Editor from './../../components/Editor/Editor';
import RunButton from '../../components/Buttons/RunButton/RunButton';
import './MainPage.scss';

const MainPage: FC = () => {
  const [operationValue, setOperationValue] = useState<string>('');
  const [variablesValue, setVariablesValue] = useState<string>('');
  const [headersValue, setHeadersValue] = useState<string>('');

  const [isVar, setIsVar] = useState<boolean>(true);

  console.log(operationValue);

  const runQuery = () => {};

  return (
    <div className="main">
      <div className="container main__container">
        <div className="main__documentation">documentation</div>
        <div className="main__editors">
          <Editor title={'Operation'} onChange={setOperationValue} value={operationValue}>
            <RunButton handleClick={runQuery} />
          </Editor>
          {isVar ? (
            <Editor
              title={'Variables'}
              secondTitle={'Headers'}
              onChange={setVariablesValue}
              value={variablesValue}
              onClick={() => setIsVar(false)}
            />
          ) : (
            <Editor
              title={'Headers'}
              secondTitle={'Variables'}
              onChange={setHeadersValue}
              value={headersValue}
              onClick={() => setIsVar(true)}
            />
          )}
        </div>
        <div className="main__response">response</div>
      </div>
    </div>
  );
};

export default MainPage;
