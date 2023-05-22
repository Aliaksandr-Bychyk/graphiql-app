import { IQueryType } from '@/interfaces/Docs';
import { FC, useContext } from 'react';
import { DocsContext } from '../DocsWindow/DocsWindow';

interface IDocsQueryTypeProps {
  type: IQueryType;
}

const DocsQueryType: FC<IDocsQueryTypeProps> = ({ type }) => {
  const { setValue } = useContext(DocsContext);
  return (
    <span
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
