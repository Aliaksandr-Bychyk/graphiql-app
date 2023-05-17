import { FC } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import './Editor.scss';

interface IEditorProps {
  title: string;
  onChange: (value: string) => void;
  value: string;
}

const Editor: FC<IEditorProps> = ({ title, onChange, value }) => {
  const handleChange = (_editor: ControlledEditor, _data: object, value: string) => onChange(value);

  return (
    <div className="editor">
      <div className="editor__header">
        <h3 className="editor__title">{title}</h3>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="editor__body"
        options={{
          lineWrapping: true,
          lint: true,
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
          tabSize: 2,
          moveOnDrag: true,
        }}
      />
    </div>
  );
};

export default Editor;
