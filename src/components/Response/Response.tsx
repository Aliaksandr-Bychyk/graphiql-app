import { FC } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import './Response.scss';

interface IResponseProps {
  query: DocumentNode;
}

const Response: FC<IResponseProps> = ({ query }) => {
  const { loading, error, data } = useQuery(query);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="response">
      Hereeee
      {/* {data.__schema.types.map((type, index) => (
          <QueryType key={index} type={type} />
        ))} */}
    </div>
  );
};

export default Response;
