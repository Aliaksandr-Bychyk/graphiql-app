import { IQueryField } from '@/interfaces/Docs';
import { FC, useContext } from 'react';
import { DocsContext } from '../DocsWindow/DocsWindow';
import './DocsQueryField.scss';
import DocsQueryArgs from '../DocsQueryArgs/DocsQueryArgs';

interface IDocsQueryFieldProps {
  field: IQueryField;
}

const DocsQueryField: FC<IDocsQueryFieldProps> = ({ field }) => {
  const { setValue } = useContext(DocsContext);
  return (
    <div className="query-field-container">
      <span
        className="query-field"
        onClick={() => {
          setValue!(field);
        }}
      >
        {field.name}
      </span>
      <span>(</span>
      {field.args.length > 0 && <DocsQueryArgs value={field as IQueryField} />}
      <span>)</span>
    </div>
  );
};

export default DocsQueryField;
