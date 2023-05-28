import { FC, PropsWithChildren } from 'react';
import './Button.scss';

interface IButtonProps {
  onClick?: () => void;
  className?: string;
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, onClick, className }) => {
  const classes = `${'button'} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
