import { useTranslation } from 'react-i18next';
import Button from '@/components/Buttons/Button/Button';
import WelcomeLogo from '@/assets/main.png';
import AlexIcon from '@/assets/Alex.png';
import VikaIcon from '@/assets/Vika.png';
import NursIcon from '@/assets/Nurs.png';
import { useNavigate } from 'react-router-dom';

import './WelcomePage.scss';

const WelcomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const developers = [
    { id: 1, name: t('AliaksandrBychyk'), img: AlexIcon },
    { id: 2, name: t('ViktoriaKondrashova'), img: VikaIcon },
    { id: 3, name: t('NursultanKadyrov'), img: NursIcon },
  ];

  return (
    <main className="welcome">
      <div className="container">
        <div className="welcome__wrapper">
          <div className="welcome__info info">
            <img className="info__logo" src={WelcomeLogo} alt="Welcome logo" />
            <h2 className="info__title">{t('appDesc')}</h2>
            <Button onClick={() => navigate('/main')}>{t('tryBtn')}</Button>
          </div>

          <div className="welcome__developers dev">
            <h2 className="dev__title">{t('developers')}</h2>
            <ul className="dev__list">
              {developers.map((item) => (
                <li key={item.id} className="dev__item">
                  <img className="dev__img" src={item.img} alt="dev" />
                  <p className="dev__name">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="welcome__text">{t('courseDesc')}</div>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
