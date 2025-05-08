import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Menu from '@/components/UI/Menu';
import '../app/main.css';
import Footer from '@/components/UI/Footer';
import HeadComponent from '@/components/Head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Banner from '@/components/Banner';
import { Wrapper } from '@/components/UI/Wrapper';
import { checkBanner } from '@/components/Banner/util';
import { useSearchParams } from 'next/navigation';

export default function FullGuide() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(30);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  if (!isMounted) return null;

  return (
    <>
      <HeadComponent title="Zakazite termin" />
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
                <h2 style={{ marginBottom: '44px' }}>
                  {t('fullGuide.title')} 😅
                </h2>
                <p>{t('fullGuide.subtitle')}</p>
                <p>
                  {t('fullGuide.subtitleSecond.firstPart')}{' '}
                  <Link href={'/'}>{t('fullGuide.subtitleSecond.link')}</Link>,{' '}
                  {t('fullGuide.subtitleSecond.secondPart')} {timeLeft}...
                </p>
              </header>
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
