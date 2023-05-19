import { gql, useQuery } from '@apollo/client';
import { FC, useState } from 'react';
import Editor from './../../components/Editor/Editor';
import RunButton from '../../components/Buttons/RunButton/RunButton';
// import Response from '../../components/Response/Response';
import './MainPage.scss';

const MainPage: FC = () => {
  const [operationValue, setOperationValue] = useState<string>('');
  const [variablesValue, setVariablesValue] = useState<string>('');
  const [headersValue, setHeadersValue] = useState<string>('');

  const [isVar, setIsVar] = useState<boolean>(true);

  // const query = gql`
  //   ${operationValue}
  // `;

  // const query = gql`
  //   query getAnime {
  //     Media(id: 1, type: ANIME) {
  //       id
  //       title {
  //         romaji
  //         english
  //         native
  //       }
  //     }
  //   }
  // `;

  const runQuery = () => {
    if (operationValue) {
      const query = gql`
        ${operationValue}
      `;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { loading, error, data } = useQuery(query);
      console.log(data);
      return { loading, error, data };
    }
  };

  // const { loading, error, data } = useQuery(query);
  // console.log(data);

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
        <div className="main__response">
          {/* <Response data={data} loading={loading} error={error} /> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
