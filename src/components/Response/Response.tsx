import { FC } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { UnControlled as UnControlledEditor } from 'react-codemirror2';
import './Response.scss';

interface IResponseProps {
  query: DocumentNode;
  variables: string;
  headers: string;
}

const Response: FC<IResponseProps> = ({ query, variables, headers }) => {
  const { t } = useTranslation();

  const { loading, error, data } = useQuery(query, {
    variables: { variables },
    context: { headers: headers },
  });

  if (loading) return <p className="response__info">{t('Loading')}</p>;
  if (error)
    return (
      <p className="response__info">
        {t('error')}: {error.message}
      </p>
    );

  return (
    <UnControlledEditor
      value={JSON.stringify(data, null, 2)}
      className="response-boby"
      options={{
        lineWrapping: true,
        mode: 'javascript',
        theme: 'material',
        tabSize: 2,
        readOnly: true,
      }}
    />
  );
};

export default Response;
