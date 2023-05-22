import { DocumentNode, gql } from '@apollo/client';
import { FC, useState } from 'react';
import Editor from './../../components/Editor/Editor';
import RunButton from '../../components/Buttons/RunButton/RunButton';
import Response from '../../components/Response/Response';
import './MainPage.scss';

const MainPage: FC = () => {
  const [operationValue, setOperationValue] = useState<string>('');
  const [variablesValue, setVariablesValue] = useState<string>('');
  const [headersValue, setHeadersValue] = useState<string>('');
  const [query, setQuery] = useState<DocumentNode | undefined>();
  const [isVar, setIsVar] = useState<boolean>(true);

  const runQuery = () => {
    if (operationValue) {
      setQuery(gql`
        ${operationValue}
      `);
    }
  };

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
        <div className="response">
          <div className="response__header">
            <h3 className="response__title">Response</h3>
          </div>
          {query && (
            <Response
              query={query}
              variables={variablesValue ? JSON.parse(variablesValue) : variablesValue}
              headers={headersValue ? JSON.parse(headersValue) : headersValue}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
