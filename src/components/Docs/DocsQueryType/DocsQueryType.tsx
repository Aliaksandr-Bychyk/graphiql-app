import { IQueryType } from '@/interfaces/Docs';
import { FC, useContext } from 'react';
import { DocsContext } from '../DocsWindow/DocsWindow';
import './DocsQueryType.scss';

interface IDocsQueryTypeProps {
  type: IQueryType;
}

const DocsQueryType: FC<IDocsQueryTypeProps> = ({ type }) => {
  const { setValue } = useContext(DocsContext);
  return (
    <span
      className="query-type"
      onClick={() => {
        console.log(type);
        setValue!(type);
      }}
    >
      {type.name}
    </span>
  );
};

export default DocsQueryType;
