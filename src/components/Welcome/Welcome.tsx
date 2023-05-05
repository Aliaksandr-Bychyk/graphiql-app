import WelcomeLogo from '@/assets/main.png';
import AlexIcon from '@/assets/Alex.png';
import VikaIcon from '@/assets/Vika.png';
import NursIcon from '@/assets/Nurs.png';

import './Welcome.scss';

const Welcome = () => {
  const developers = [
    { id: 1, name: 'Aliaksandr Bychyk', img: AlexIcon },
    { id: 2, name: 'Viktoria Kondrashova', img: VikaIcon },
    { id: 3, name: 'Nursultan Kadyrov', img: NursIcon },
  ];

  return (
    <main className="welcome">
      <div className="container">
        <div className="welcome__wrapper">
          <div className="welcome__info info">
            <img className="info__logo" src={WelcomeLogo} alt="Welcome logo" />
            <h2 className="info__title">GraphiQL is a playground/IDE for graphQL requests</h2>
            <button>Try out</button>
          </div>

          <div className="welcome__developers developers">
            <h2 className="developers__title"></h2>
            <ul className="developers__list">
              {developers.map((item) => (
                <li key={item.id} className="developers__item">
                  <img className="developers__img" src={item.img} alt="dev" />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="welcome__text">
            The task was completed as part of RS School React Course.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
