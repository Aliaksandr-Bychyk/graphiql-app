import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './submitInput.scss';

interface ISubmitInput {
  disabled: boolean;
}

const SubmitInput: FC<ISubmitInput> = ({ disabled }) => {
  const { t } = useTranslation();

  return <input type="submit" className="submit-input" value={t('submit')} disabled={disabled} />;
};

export default SubmitInput;
