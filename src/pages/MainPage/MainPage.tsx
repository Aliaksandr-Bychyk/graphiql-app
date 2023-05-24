import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from './../../components/Editor/Editor';
import RunButton from '../../components/Buttons/RunButton/RunButton';
import './MainPage.scss';

const MainPage: FC = () => {
  const { t } = useTranslation();

  const [operationValue, setOperationValue] = useState<string>('');
  const [variablesValue, setVariablesValue] = useState<string>('');
  const [headersValue, setHeadersValue] = useState<string>('');

  const [isVar, setIsVar] = useState<boolean>(true);

  const runQuery = () => {};

  return (
    <div className="main">
      <div className="container main__container">
        <div className="main__documentation">{t('documentation')}</div>
        <div className="main__editors">
          <Editor title={t('operation')} onChange={setOperationValue} value={operationValue}>
            <RunButton handleClick={runQuery} />
          </Editor>
          {isVar ? (
            <Editor
              title={t('variables')}
              secondTitle={t('headers')}
              onChange={setVariablesValue}
              value={variablesValue}
              onClick={() => setIsVar(false)}
            />
          ) : (
            <Editor
              title={t('headers')}
              secondTitle={t('variables')}
              onChange={setHeadersValue}
              value={headersValue}
              onClick={() => setIsVar(true)}
            />
          )}
        </div>
        <div className="main__response">{t('response')}</div>
      </div>
    </div>
  );
};

export default MainPage;
