import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../../../pages/AuthRegPage/AuthRegPage';
import './TextInput.scss';

interface ITextInputProps {
  type: string;
  placehilder: string;
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors;
}

const regExp = new RegExp('(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[-#$.%&@!+=<>*])');

const TextInput: FC<ITextInputProps> = ({ type, placehilder, register, errors }) => {
  return (
    <label htmlFor={type}>
      <input
        type={type}
        className="text-input"
        id={type}
        // name={type}
        placeholder={placehilder}
        {...register(type, {
          required: 'Value is required',
          minLength: { value: 8, message: 'Value should be at least 8 chars' },
          validate: (value: string) =>
            value.match(regExp) ||
            'Value should contain at least 1 letter, 1 digit, 1 special char',
        })}
      />
      {errors[type] && (
        <p role="alert" className="text-input__error">
          {errors[type]?.message?.toString()}
        </p>
      )}
    </label>
  );
};

export default TextInput;
