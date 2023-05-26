import { FC, useContext } from 'react';
import { DocsContext } from '../DocsWindow/DocsWindow';
import './DocsQueryType.scss';
import { IQueryType } from '@/interfaces/Docs';

interface IDocsQueryTypeProps {
  typeName: string;
}

const DocsQueryType: FC<IDocsQueryTypeProps> = ({ typeName }) => {
  const { setValue, historyDeep, history } = useContext(DocsContext);
  const { home } = useContext(DocsContext);
  const type = home!.find((el) => el.name == typeName);

  return (
    <span
      className="query-type"
      onClick={() => {
        setValue!(type!);
        historyDeep!.current += 1;
        history!.current.push(type as IQueryType);
      }}
    >
      {type!.name}
    </span>
  );
};

export default DocsQueryType;
