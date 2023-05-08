import { FC } from 'react';
import TextInput from '../../components/Inputs/TextInput/TextInput';
import Button from '../../components/Buttons/Button/Button';
import './AuthRegPage.scss';

const AuthRegPage: FC = () => {
  return (
    <div className="auth-reg">
      <TextInput type="email" placehilder="Email..." />
      <TextInput type="text" placehilder="Password..." />
    </div>
  );
};

export default AuthRegPage;
