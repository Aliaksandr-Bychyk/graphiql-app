import { FC } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { UnControlled as UnControlledEditor } from 'react-codemirror2';
import './Response.scss';

interface IResponseProps {
  query: DocumentNode;
  variables: object;
  headers: object;
}

const Response: FC<IResponseProps> = ({ query, variables, headers }) => {
  const { loading, error, data } = useQuery(query, {
    variables: { variables },
    // context: { headers: { headers } },
  });

  if (loading) return <p className="response__info">Loading...</p>;
  if (error) return <p className="response__info">Error : {error.message}</p>;

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
