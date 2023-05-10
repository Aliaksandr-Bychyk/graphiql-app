import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import './TextInput.scss';

interface ITextInputProps<T extends FieldValues> {
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

const regExp = new RegExp('(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[-#$.%&@!+=<>*])');

const TextInput = <T extends FieldValues>({
  name,
  placeholder,
  register,
  errors,
}: ITextInputProps<T>) => {
  return (
    <label htmlFor={name}>
      <input
        type={name === 'email' ? 'email' : 'text'}
        className="text-input"
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: 'Value is required',
          minLength: { value: 8, message: 'Value should be at least 8 chars' },
          validate: (value: string) =>
            regExp.test(value) || 'Value should contain at least 1 letter, 1 digit, 1 special char',
        })}
      />
      {errors[name] && (
        <p role="alert" className="text-input__error">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </label>
  );
};

export default TextInput;
