import { gql, useQuery } from '@apollo/client';
import {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  Suspense,
  createContext,
  lazy,
  useEffect,
  useRef,
  useState,
} from 'react';
import './DocsWindow.scss';
import { IQueryField, IQueryType } from '@/interfaces/Docs';
import { getIntrospectionQuery } from 'graphql';
import { useTranslation } from 'react-i18next';

const DocsExplorer = lazy(() => import('../DocsExplorer/DocsExplorer'));

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
  const { t } = useTranslation();

  useEffect(() => {
    data && setValue(data.__schema.types);
  }, [data]);

  if (loading || error) return <></>;

  const home = data.__schema.types;
  return (
    <DocsContext.Provider value={{ value, setValue, home, history, historyDeep }}>
      <div className="main__documentation">
        <div className="docs">
          <Suspense fallback={<p className="docs__info">{t('Loading')}</p>}>
            <DocsExplorer />
          </Suspense>
        </div>
      </div>
    </DocsContext.Provider>
  );
};

export default DocsWindow;
