import { IQueryField } from '@/interfaces/Docs';
import { FC } from 'react';
import DocsQueryType from '../DocsQueryType/DocsQueryType';

interface IDocsQueryArgsProps {
  value: IQueryField;
}

const DocsQueryArgs: FC<IDocsQueryArgsProps> = ({ value }) => {
  return (
    <div className="query-field__args-container">
      {value.args!.map((arg, index) => (
        <span key={index}>
          <span className="query-arg">{arg.name}</span>
          {': '}
          <DocsQueryType
            typeName={arg.type.name ? arg.type.name : arg.type.ofType!.name}
          ></DocsQueryType>
        </span>
      ))}
    </div>
  );
};

export default DocsQueryArgs;
