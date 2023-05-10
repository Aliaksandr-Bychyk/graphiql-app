import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import SubmitInput from '../../components/Inputs/SubmitInput/SubmitInput';
import './AuthRegPage.scss';

export interface FormInputs {
  email: string;
  password: string;
}

const AuthRegPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const [isReg, setIsReg] = useState<boolean>(true);

  const onSubmit = () => {
    //do something
  };

  return (
    <div className="auth-reg">
      <div className="container">
        <div className="auth-reg__wrapper">
          <h1 className="auth-reg__title">{isReg ? 'Sign Up' : 'Sign In'}</h1>
          <form className="auth-reg__form" onSubmit={handleSubmit(onSubmit)}>
            <TextInput name="email" placeholder="Email..." register={register} errors={errors} />
            <TextInput
              name="password"
              placeholder="Password..."
              register={register}
              errors={errors}
            />
            <SubmitInput disabled={false} />
          </form>
          {isReg && (
            <div className="auth-reg__question">
              Do you already have an account?&nbsp;
              <span className="auth-reg__link" onClick={() => setIsReg(false)}>
                Sing In
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthRegPage;
