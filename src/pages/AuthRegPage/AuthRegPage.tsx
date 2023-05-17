import { FC } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import SubmitInput from '../../components/Inputs/SubmitInput/SubmitInput';
import './AuthRegPage.scss';
import { useLocation, useNavigate } from 'react-router-dom';

import { useUserAuth } from '@/context/AuthContext';

export interface IFormInputs {
  email: string;
  password: string;
}

const AuthRegPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const isReg = location.pathname === '/sign-up';

  const userStore = useUserAuth();

  const loginUser = async (data: IFormInputs) => {
    try {
      await userStore?.signIn(data.email, data.password);
      navigate('/editor');
    } catch (error) {
      console.log(error);
    }
  };

  const regUser = async (data: IFormInputs) => {
    try {
      await userStore?.createUser(data.email, data.password);
      navigate('/editor');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data: IFormInputs) => {
    if (isReg) {
      await regUser(data);
      return;
    }
    await loginUser(data);
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
              <span className="auth-reg__link" onClick={() => navigate('/sign-in')}>
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
