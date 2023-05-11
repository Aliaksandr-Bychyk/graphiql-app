import { FC } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import './Editor.scss';

interface IEditorProps {
  title: string;
  handleChange: () => void;
  value: string;
}

const Editor: FC<IEditorProps> = ({ title, handleChange, value }) => {
  return (
    <div className="editor">
      <div className="editor__header">
        <h3 className="editor__title">{title}</h3>
      </div>
      <div className="editor__body">
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: 'text/javascript',
            theme: 'material',
            lineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
