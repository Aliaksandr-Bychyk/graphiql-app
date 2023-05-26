import { IQueryField } from '@/interfaces/Docs';
import { FC, useContext } from 'react';
import { DocsContext } from '../DocsWindow/DocsWindow';
import './DocsQueryField.scss';
import DocsQueryType from '../DocsQueryType/DocsQueryType';

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
      {field.args.length > 0 && (
        <div className="query-field__args-container">
          {field.args.map((arg, index) => (
            <span key={index}>
              <span className="query-arg">{arg.name}</span>
              {': '}
              <DocsQueryType
                typeName={arg.type.name ? arg.type.name : arg.type.ofType!.name}
              ></DocsQueryType>
            </span>
          ))}
        </div>
      )}
      <span>)</span>
    </div>
  );
};

export default DocsQueryField;
