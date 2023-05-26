import { FC, useContext } from 'react';
import './DocsExplorer.scss';
import DocsQueryType from '../DocsQueryType/DocsQueryType';
import { DocsContext } from '../DocsWindow/DocsWindow';
import { IQueryField, IQueryType } from '@/interfaces/Docs';
import DocsQueryField from '../DocsQueryField/DocsQueryField';
import DocsQueryArgs from '../DocsQueryArgs/DocsQueryArgs';
import { useTranslation } from 'react-i18next';

const DocsExplorer: FC = () => {
  const { t } = useTranslation();
  const { value, setValue, home, history, historyDeep } = useContext(DocsContext);
  return (
    <div>
      <div className="docs-explorer__nav">
        {!Array.isArray(value) && (
          <button
            onClick={() => {
              historyDeep!.current -= 1;
              history!.current.pop();
              setValue!(
                history!.current.length > 0 ? history!.current[history!.current.length - 1] : home!
              );
            }}
          >
            &lt;
            {history!.current.length > 1
              ? (history!.current[history!.current.length - 2] as IQueryType | IQueryField).name
              : 'Schema'}
          </button>
        )}
        <h2>{(value as IQueryType).name ?? t('documentationExplorer')}</h2>
      </div>

      {(value as IQueryType).__typename == '__Type' ||
      (value as IQueryField).__typename == '__Field' ? (
        <section>
          <h2>{t('description')}</h2>
          {(value as IQueryType).__typename == '__Type' &&
            home!.find((el) => el.name == (value as IQueryField | IQueryType).name)!.description}
          {(value as IQueryField).__typename == '__Field' && (value as IQueryField).description}
        </section>
      ) : (
        ''
      )}

      {(value as IQueryType).fields ? (
        <section>
          <h2>{t('fields')}</h2>
          {(value as IQueryType).fields!.map((field, index) => (
            <DocsQueryField key={index} field={field} />
          ))}
        </section>
      ) : (
        ''
      )}

      {(value as IQueryField).args && (value as IQueryField).args.length > 0 && (
        <section>
          <h2>{t('arguments')}</h2>
          <DocsQueryArgs value={value as IQueryField} className="docs-explorer__args-container" />
        </section>
      )}

      {(value as IQueryField).__typename == '__Field' && (
        <section>
          <h2>{t('type')}</h2>
          <DocsQueryType
            typeName={
              (value as IQueryField).type.name
                ? (value as IQueryField).type.name
                : (value as IQueryField).type.ofType!.name
            }
          />
        </section>
      )}

      {Array.isArray(value) ? (
        <section className="docs-explorer__section">
          <h2>{t('types')}</h2>
          {value.map((type, index: number) => (
            <DocsQueryType key={index} typeName={type.name} />
          ))}
        </section>
      ) : (
        ''
      )}
    </div>
  );
};

export default DocsExplorer;
