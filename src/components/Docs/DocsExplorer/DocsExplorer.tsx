import { FC, useContext } from 'react';
import './DocsExplorer.scss';
import DocsQueryType from '../DocsQueryType/DocsQueryType';
import { DocsContext } from '../DocsWindow/DocsWindow';
import { IQueryField, IQueryType } from '@/interfaces/Docs';

const DocsExplorer: FC = () => {
  const { value, setValue, home } = useContext(DocsContext);
  return (
    <div>
      <div className="docs-explorer__nav">
        {!Array.isArray(value) && <button onClick={() => setValue!(home!)}>H</button>}
        <h2>{(value as IQueryType).name ?? 'Documentation Explorer'}</h2>
      </div>

      {(value as IQueryType).description ? (
        <section>
          <h2>Description</h2>
          {(value as IQueryType).description}
        </section>
      ) : (
        ''
      )}

      {(value as IQueryType).fields ? (
        <section>
          <h2>Fields</h2>
          {(value as IQueryType).fields!.map((el, i) => (
            <p key={i}>{el.name}()</p>
          ))}
        </section>
      ) : (
        ''
      )}

      {(value as IQueryField).type ? (
        <section>
          <h2>Type</h2>
          <DocsQueryType type={(value as IQueryField).type} />
        </section>
      ) : (
        ''
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
