import { FC } from 'react';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import './AuthRegPage.scss';

const AuthRegPage: FC = () => {
  const isReg = true;

  return (
    <div className="auth-reg">
      <div className="container">
        {isReg ? (
          <div className="auth-reg__wrapper">
            <h1 className="auth-reg__title">Sign Up</h1>
            <form className="reg__form">
              <TextInput type="email" placehilder="Email..." />
              <TextInput type="text" placehilder="Password..." />
            </form>
            <div className="reg__question">Do you already have an account? Sing In.</div>
          </div>
        ) : (
          <div className="auth-reg__wrapper">
            <h1 className="auth-reg__title">Sign In</h1>
            <form className="auth__form">
              <TextInput type="email" placehilder="Email..." />
              <TextInput type="text" placehilder="Password..." />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthRegPage;
