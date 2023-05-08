import { FC } from 'react';
import './TextInput.scss';

interface ITextInputProps {
  type: string;
  placehilder: string;
}

const TextInput: FC<ITextInputProps> = ({ type, placehilder }) => {
  return (
    <input type={type} className="text-input" id={type} name={type} placeholder={placehilder} />
  );
};

export default TextInput;
