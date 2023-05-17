import { gql, useQuery } from '@apollo/client';
import { FC, useEffect } from 'react';
import './DocsWindow.scss';

const query = gql`
  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }
  fragment TypeRef on __Type {
    name
    description
  }

  query IntrospectionQuery {
    __schema {
      queryType {
        name
        fields {
          name
          type {
            ...TypeRef
          }
          args {
            ...InputValue
          }
        }
      }
      mutationType {
        name
      }
      types {
        ...FullType
      }
    }
  }
`;

const DocsWindow: FC = () => {
  const { loading, error, data } = useQuery(query);
  // console.log(data.__schema.types);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="docs">
      {data.__schema.types.map((type) => (
        <span>{type.name}</span>
      ))}
    </div>
  );
};

export default DocsWindow;
