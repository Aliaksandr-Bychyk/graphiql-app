import { FC } from 'react';
import { ApolloError } from '@apollo/client';
import './Response.scss';

interface IResponseProps {
  data: object;
  loading: boolean;
  error: ApolloError | undefined;
}

const Response: FC<IResponseProps> = ({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="response">
      {/* {data.__schema.types.map((type, index) => (
          <QueryType key={index} type={type} />
        ))} */}
    </div>
  );
};

export default Response;
