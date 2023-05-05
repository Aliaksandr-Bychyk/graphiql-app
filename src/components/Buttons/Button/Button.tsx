import { FC, PropsWithChildren } from 'react';
import './Button.scss';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
