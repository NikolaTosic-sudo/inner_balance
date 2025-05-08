import Menu from '@/components/UI/Menu';
import '../app/main.css';
import '../app/calendar.css';
import Footer from '@/components/UI/Footer';
import HeadComponent from '@/components/Head';
import ContactForm from '@/components/ContactForm';
import { useTranslation } from 'react-i18next';
import RootLayout from '@/app/layout';
import { useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import { Wrapper } from '@/components/UI/Wrapper';
import { checkBanner } from '@/components/Banner/util';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

export default function Contact() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

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
      <HeadComponent title={t('contact.title')} />
      <Banner />
      <div id="page-wrapper">
        <Wrapper banner={checkBanner(router)} className="wrapper">
          <div className="inner">
            <Menu />
          </div>
        </Wrapper>

        <div className="wrapper">
          <div className="inner">
            <section className="main accent5" style={{ borderRadius: 8 }}>
              <header className="major">
                <h2>{t('contact.title')}</h2>
                <p>
                  {/* Izaberite idealne datume za Vas, koji tretman želite, napišite
                  dodatne zahtjeve ako ih imate, i neko će Vam se ubrzo javiti */}
                  {t('contact.text')}
                </p>
              </header>
              <ContactForm />
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
