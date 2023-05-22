import { gql, useQuery } from '@apollo/client';
import { Dispatch, FC, SetStateAction, createContext, useEffect, useState } from 'react';
import './DocsWindow.scss';
import { IQueryField, IQueryType } from '@/interfaces/Docs';
import DocsExplorer from '../DocsExplorer/DocsExplorer';

const query = gql`
  fragment FullType on __Type {
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
      types {
        ...FullType
      }
    }
  }
`;

interface IDocsContext {
  value: IQueryType[] | IQueryType | IQueryField;
  setValue?: Dispatch<SetStateAction<IQueryType[] | IQueryType | IQueryField>>;
}

export const DocsContext = createContext<IDocsContext>({ value: [] });

const DocsWindow: FC = () => {
  const { loading, error, data } = useQuery(query);
  const [value, setValue] = useState<IQueryType[] | IQueryType | IQueryField>([]);

  useEffect(() => {
    data && setValue(data.__schema.types);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <DocsContext.Provider value={{ value, setValue }}>
      <div className="docs">
        <DocsExplorer />
      </div>
    </DocsContext.Provider>
  );
};

export default DocsWindow;
