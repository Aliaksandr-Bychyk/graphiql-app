import { FC, useContext } from 'react';
import './DocsExplorer.scss';
import DocsQueryType from '../DocsQueryType/DocsQueryType';
import { DocsContext } from '../DocsWindow/DocsWindow';
import { IQueryField, IQueryType } from '@/interfaces/Docs';
import DocsQueryField from '../DocsQueryField/DocsQueryField';

const DocsExplorer: FC = () => {
  const { value, setValue, home } = useContext(DocsContext);
  return (
    <div>
      <div className="docs-explorer__nav">
        {!Array.isArray(value) && <button onClick={() => setValue!(home!)}>H</button>}
        <h2>{(value as IQueryType).name ?? 'Documentation Explorer'}</h2>
      </div>

      {(value as IQueryType).__typename == '__Type' ||
      (value as IQueryField).__typename == '__Field' ? (
        <section>
          <h2>Description</h2>
          {(value as IQueryType).__typename == '__Type' &&
            home!.find((el) => el.name == (value as IQueryField | IQueryType).name)!.description}
          {(value as IQueryField).__typename == '__Field' && (value as IQueryField).description}
        </section>
      ) : (
        ''
      )}

      {(value as IQueryType).fields ? (
        <section>
          <h2>Fields</h2>
          {(value as IQueryType).fields!.map((field, index) => (
            <DocsQueryField key={index} field={field} />
          ))}
        </section>
      ) : (
        ''
      )}

      {(value as IQueryField).__typename == '__Field' && (
        <section>
          <h2>Type</h2>
          {(value as IQueryField).type.name ? (
            <DocsQueryType
              type={home!.find((el) => el.name == (value as IQueryField).type.name)!}
            />
          ) : (
            <DocsQueryType
              type={home!.find((el) => el.name == (value as IQueryField).type.ofType!.name)!}
            />
          )}
        </section>
      )}

      {Array.isArray(value) ? (
        <section className="docs-explorer__section">
          <h2>Types</h2>
          {value.map((type, index: number) => (
            <DocsQueryType key={index} type={type} />
          ))}
        </section>
      ) : (
        ''
      )}
    </div>
  );
};

export default DocsExplorer;
