import { FC } from 'react';
import './submitInput.scss';

interface ISubmitInput {
  disabled: boolean;
}

const SubmitInput: FC<ISubmitInput> = ({ disabled }) => {
  return <input type="submit" className="submit-input" value="Submit" disabled={disabled} />;
};

export default SubmitInput;
