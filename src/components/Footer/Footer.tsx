import { FC } from 'react';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__developers">
          <h3 className="footer__title">DEVELOPERS</h3>
          <ul className="footer__list">
            <li className="footer__list__item">
              <a href="https://github.com/Aliaksandr-Bychyk" target="blank">
                Aliaksandr-Bychyk
              </a>
            </li>
            <li className="footer__list__item">
              <a href="https://github.com/viktoriakondrashova1" target="blank">
                ViktoriaKondrashova1
              </a>
            </li>
            <li className="footer__list__item">
              <a href="https://github.com/NursultanFront" target="blank">
                NursultanFront
              </a>
            </li>
          </ul>
        </div>
        <div>2023</div>
        <a href="https://rs.school/react/" className="footer__course-logo" target="blank" />
      </div>
    </footer>
  );
};

export default Footer;
