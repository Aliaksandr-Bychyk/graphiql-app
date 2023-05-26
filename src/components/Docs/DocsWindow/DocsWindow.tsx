import { gql, useQuery } from '@apollo/client';
import {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import './DocsWindow.scss';
import { IQueryField, IQueryType } from '@/interfaces/Docs';
import DocsExplorer from '../DocsExplorer/DocsExplorer';
import { getIntrospectionQuery } from 'graphql';

interface IDocsContext {
  value: IQueryType[] | IQueryType | IQueryField;
  setValue?: Dispatch<SetStateAction<IQueryType[] | IQueryType | IQueryField>>;
  home?: IQueryType[];
  history?: MutableRefObject<(IQueryType | IQueryType[] | IQueryField)[]>;
  historyDeep?: MutableRefObject<number>;
}

export const DocsContext = createContext<IDocsContext>({ value: [] });

const DocsWindow: FC = () => {
  const { loading, error, data } = useQuery(gql(getIntrospectionQuery()));
  const [value, setValue] = useState<IQueryType[] | IQueryType | IQueryField>([]);
  const history = useRef<(IQueryType[] | IQueryField | IQueryType)[]>([]);
  const historyDeep = useRef(0);

  useEffect(() => {
    data && setValue(data.__schema.types);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const home = data.__schema.types;
  return (
    <DocsContext.Provider value={{ value, setValue, home, history, historyDeep }}>
      <div className="docs">
        <DocsExplorer />
      </div>
    </DocsContext.Provider>
  );
};

export default DocsWindow;
