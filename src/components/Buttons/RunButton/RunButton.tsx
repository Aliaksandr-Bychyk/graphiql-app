import { FC } from 'react';
import './RunButton.scss';

interface IRunButtonProps {
  handleClick: () => void;
}

const RunButton: FC<IRunButtonProps> = ({ handleClick }) => {
  return <button onClick={handleClick} className="run-btn" />;
};

export default RunButton;
