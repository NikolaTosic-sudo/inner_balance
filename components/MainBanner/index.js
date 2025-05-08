'use client';
import MoreButton from '../UI/MoreButton';
import { useTranslation } from 'react-i18next';

const MainBanner = () => {
  const { t } = useTranslation('common');

  return (
    <section id="banner">
      <div className="items">
        <section className="accent2">
          <h1>Access Bars</h1>
          <p>{t('mainBanner.accessBars')}</p>
          <ul className="actions special">
            <li>
              <MoreButton link="/bars" classes="button primary" />
            </li>
          </ul>
        </section>
        <section className="accent3">
          <h1>Belly Revolution</h1>
          <p>{t('mainBanner.bellyRevolution')}</p>
          <ul className="actions special">
            <li>
              <MoreButton link="/belly" classes="button primary" />
            </li>
          </ul>
        </section>
      </div>
      <div className="slider">
        <article style={{ visibility: 'visible', opacity: 1 }}>
          <img
            src="/img/mainPage.jpg"
            alt=""
            style={{ visibility: 'visible' }}
          />
        </article>
      </div>
    </section>
  );
};

export default MainBanner;
