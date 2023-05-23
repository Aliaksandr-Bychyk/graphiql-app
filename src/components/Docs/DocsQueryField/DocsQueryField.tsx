import { IQueryField } from '@/interfaces/Docs';
import { FC, useContext } from 'react';
import { DocsContext } from '../DocsWindow/DocsWindow';

interface IDocsQueryFieldProps {
  field: IQueryField;
}

const DocsQueryField: FC<IDocsQueryFieldProps> = ({ field }) => {
  const { setValue } = useContext(DocsContext);
  return (
    <div
      onClick={() => {
        setValue!(field);
        console.log(field);
      }}
    >
      <span>{field.name}(</span>
      {field.args.map((arg, index) => (
        <span key={index}>{`${arg.name}: ${arg.type.name},\n`}</span>
      ))}
      <span>)</span>
    </div>
  );
};

export default DocsQueryField;
