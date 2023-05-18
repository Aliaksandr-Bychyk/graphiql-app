import { FC, PropsWithChildren } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import './Editor.scss';

interface IEditorProps {
  title: string;
  secondTitle?: string;
  onClick?: () => void;
  onChange: (value: string) => void;
  value: string;
}

const Editor: FC<PropsWithChildren<IEditorProps>> = ({
  title,
  secondTitle,
  onChange,
  value,
  onClick,
  children,
}) => {
  const handleChange = (_editor: ControlledEditor, _data: object, value: string) => onChange(value);

  return (
    <div className="editor">
      <div className="editor__header">
        <div className="editor__titles">
          <h3 className="editor__title">{title}</h3>
          <h3 className="editor__title inactive" onClick={onClick}>
            {secondTitle}
          </h3>
        </div>
        {children}
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
