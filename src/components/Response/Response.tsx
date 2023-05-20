import { FC } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { UnControlled as UnControlledEditor } from 'react-codemirror2';
import './Response.scss';

interface IResponseProps {
  query: DocumentNode;
}

const Response: FC<IResponseProps> = ({ query }) => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p className="response__loading">Loading...</p>;
  if (error) return <p className="response__error">Error : {error.message}</p>;

  return (
    <UnControlledEditor
      value={JSON.stringify(data)}
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
