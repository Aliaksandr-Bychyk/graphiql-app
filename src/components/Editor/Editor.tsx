import { FC } from 'react';
import './Editor.scss';

interface IEditorProps {
  title: string;
}

const Editor: FC<IEditorProps> = ({ title }) => {
  return (
    <div className="editor">
      <div className="editor__header">
        <h3 className="editor__title">{title}</h3>
      </div>
      <div className="editor__body">body</div>
    </div>
  );
};

export default Editor;
