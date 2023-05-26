import { FC, useContext } from 'react';
import { DocsContext } from '../DocsWindow/DocsWindow';
import './DocsQueryType.scss';

interface IDocsQueryTypeProps {
  typeName: string;
}

const DocsQueryType: FC<IDocsQueryTypeProps> = ({ typeName }) => {
  const { setValue } = useContext(DocsContext);
  const { home } = useContext(DocsContext);
  const type = home!.find((el) => el.name == typeName);

  return (
    <span
      className="query-type"
      onClick={() => {
        setValue!(type!);
      }}
    >
      {type!.name}
    </span>
  );
};

export default DocsQueryType;
