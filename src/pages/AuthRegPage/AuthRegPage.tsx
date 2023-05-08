import { FC, useState } from 'react';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import SubmitInput from '../../components/Inputs/SubmitInput/SubmitInput';
import './AuthRegPage.scss';

const AuthRegPage: FC = () => {
  const [isReg, setIsReg] = useState<boolean>(true);

  const renderSignIn = () => {
    setIsReg(false);
  };

  return (
    <div className="auth-reg">
      <div className="container">
        {isReg ? (
          <div className="auth-reg__wrapper">
            <h1 className="auth-reg__title">Sign Up</h1>
            <form className="auth-reg__form">
              <TextInput type="email" placehilder="Email..." />
              <TextInput type="text" placehilder="Password..." />
              <SubmitInput disabled={true} />
            </form>
            <div className="auth-reg__question">
              Do you already have an account?{' '}
              <span className="auth-reg__link" onClick={renderSignIn}>
                Sing In
              </span>
            </div>
          </div>
        ) : (
          <div className="auth-reg__wrapper">
            <h1 className="auth-reg__title">Sign In</h1>
            <form className="auth-reg__form">
              <TextInput type="email" placehilder="Email..." />
              <TextInput type="text" placehilder="Password..." />
              <SubmitInput disabled={true} />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthRegPage;
