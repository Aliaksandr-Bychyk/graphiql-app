import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import SubmitInput from '../../components/Inputs/SubmitInput/SubmitInput';
import { ErrorMessage } from '@hookform/error-message';
import { useLocation, useNavigate } from 'react-router-dom';

import { useUserAuth } from '@/context/AuthContext';
import { FirebaseError } from 'firebase/app';
import './AuthRegPage.scss';
import { RoutePath } from '@/routes/route';

export interface IFormInputs {
  root: string;
  email: string;
  password: string;
}

const AuthRegPage: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const isReg = location.pathname === RoutePath.SIGN_UP;
  const { t } = useTranslation();

  const userStore = useUserAuth();

  const loginUser = async (data: IFormInputs) => {
    try {
      await userStore?.signIn(data.email, data.password);
      navigate(RoutePath.EDITOR);
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError('root', { type: 'manual', message: error.code });
      }
    }
  };

  const regUser = async (data: IFormInputs) => {
    try {
      await userStore?.createUser(data.email, data.password);
      navigate(RoutePath.EDITOR);
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError('root', { type: 'manual', message: error.code });
      }
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
          <h1 className="auth-reg__title">{isReg ? t('SignUp') : t('SignIn')}</h1>
          <form className="auth-reg__form" onSubmit={handleSubmit(onSubmit)}>
            <TextInput name="email" placeholder={t('email')} register={register} errors={errors} />
            <TextInput
              name="password"
              placeholder={t('password')}
              register={register}
              errors={errors}
            />
            <ErrorMessage
              errors={errors}
              name="root"
              render={({ message }) => <span className="text-input__error">{message}</span>}
            />
            <SubmitInput disabled={userStore!.loading} />
          </form>
          {isReg ? (
            <div className="auth-reg__question">
              {t('authQuestion')}&nbsp;
              <span className="auth-reg__link" onClick={() => navigate(RoutePath.LOGIN)}>
                {t('SignIn')}
              </span>
            </div>
          ) : (
            <div className="auth-reg__question">
              {t('regQuestion')}&nbsp;
              <span className="auth-reg__link" onClick={() => navigate(RoutePath.SIGN_UP)}>
                {t('SignUp')}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthRegPage;
