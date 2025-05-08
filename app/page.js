'use client';
import Menu from '@/components/UI/Menu';
import './main.css';
import Footer from '@/components/UI/Footer';
import MoreButton from '@/components/UI/MoreButton';
import { default as NextImage } from 'next/image';
import { Image } from 'antd';
import Testimonials from '@/components/Testimonials';
import HeadComponent from '@/components/Head';
import MainBanner from '@/components/MainBanner';
import CTAComponent from '@/components/CTAComponent';
import Newsletter from '@/components/NewsletterComponent';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, Suspense } from 'react';
import BannerMainPage from '@/components/BannerMainPage';
import { Wrapper } from '@/components/UI/Wrapper';
import { useSearchParams } from 'next/navigation';

function HomeContent() {
  const { t, i18n } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams()

  useEffect(() => {
    const lang = searchParams.get("lang")
    if (typeof window !== 'undefined' && lang) {
      localStorage.setItem('lang', lang);
      i18n.changeLanguage(lang ?? 'me');
    } else if (typeof window !== 'undefined') {
      const value = localStorage.getItem('lang');
      i18n.changeLanguage(value ?? 'me');
    }
    setIsMounted(true);
  }, [i18n, searchParams]);

  if (!isMounted) return null;

  return (
    <>
      <HeadComponent title="Inner Balance" />
      {/* <BannerMainPage /> */}
      <div id="page-wrapper">
        <Wrapper className="wrapper" banner={false}>
          <div className="inner">
            <Menu />

            <MainBanner />
          </div>
        </Wrapper>

        <div className="wrapper">
          <div className="inner">
            <section className="main">
              <header className="major">
                <h2>{t('mainPage.cert')}</h2>
                <p>{t('mainPage.certSub')}</p>
              </header>
              <div className="features">
                <section>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className="icon solid fa-camera major accent2">
                      <Image
                        className="cert"
                        src="img/bars_cert.png"
                        alt="Access Bars Certification"
                      />
                    </span>
                  </div>
                  <h3>
                    Access Bars <br /> Certificate
                  </h3>
                  <p>
                    {t('mainPage.accessBarsCert')}
                    <br /> <span style={{ color: '#656dba' }}>19.03.2023.</span>
                  </p>
                </section>
                <section>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className="icon solid fa-paper-plane major accent3">
                      <Image
                        className="cert"
                        src="img/foundation_cert.png"
                        alt="Access Bars Certification"
                      />
                    </span>
                  </div>
                  <h3>The Foundation Certificat</h3>
                  <p>
                    {t('mainPage.foundationCert')}
                    <br /> <span style={{ color: '#656dba' }}>26.09.2023.</span>
                  </p>
                </section>
                <section>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className="icon solid fa-envelope major accent4">
                      <Image
                        className="cert"
                        src="img/belly_cert.png"
                        alt="Access Bars Certification"
                      />
                    </span>
                  </div>
                  <h3>Belly Revolution Certificat</h3>
                  <p>
                    {t('mainPage.revolutionBellyCert')}
                    <br /> <span style={{ color: '#656dba' }}>Mart 2024.</span>
                  </p>
                </section>
              </div>
            </section>

            <section className="main accent2">
              <Testimonials />
            </section>

            <section className="main">
              <header className="major">
                <h2>{t('mainPage.massagesForBetter')}</h2>
                <p>{t('mainPage.offers')}</p>
              </header>
              <div className="spotlights">
                <article>
                  <div className="image">
                    <NextImage
                      width={930}
                      height={462}
                      src="/img/bars.jpg"
                      alt=""
                      data-position="center"
                    />
                  </div>
                  <div className="content">
                    <h3>Access Bars</h3>
                    <p>{t('mainPage.accessBars')}</p>
                    <ul className="actions special">
                      <li>
                        <MoreButton link="/bars" classes="button primary" />
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <div className="image">
                    <NextImage
                      width={440}
                      height={440}
                      src="/img/belly.png"
                      alt=""
                      data-position="center"
                    />
                  </div>
                  <div className="content">
                    <h3>Belly Revolution</h3>
                    <p>{t('mainPage.bellyRevolution')}</p>
                    <ul className="actions special">
                      <li>
                        <MoreButton link="/belly" classes="button primary" />
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>
            <CTAComponent />
          </div>
        </div>

        <div className="wrapper">
          <div className="inner">
            <Newsletter />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
