import Menu from '@/components/UI/Menu';
import '../app/main.css';
import Footer from '@/components/UI/Footer';
import GenericPageHeader from '@/components/UI/GenericPageHeader';
import CustomList from '@/components/UI/List';
import HeadComponent from '@/components/Head';
import AboutComponent from '@/components/AboutComponent';
import Faq from '@/components/Faq';
import CTAComponent from '@/components/CTAComponent';
import Newsletter from '@/components/NewsletterComponent';
import RootLayout from '@/app/layout';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import { Wrapper } from '@/components/UI/Wrapper';
import { checkBanner } from '@/components/Banner/util';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

const namenjenList = [
  'customBellyList.first',
  'customBellyList.second',
  'customBellyList.third',
  'customBellyList.fourth',
  'customBellyList.fifth',
  'customBellyList.sixth',
  'customBellyList.seventh',
];

const faqs = [
  {
    question: 'bellyFaqs.firstQuestion',
    answer: 'bellyFaqs.firstAnswer',
  },
  {
    question: 'bellyFaqs.secondQuestion',
    answer: 'bellyFaqs.secondAnswer',
  },
  {
    question: 'bellyFaqs.thirdQuestion',
    answer: 'bellyFaqs.thirdAnswer',
  },
];

export default function Belly() {
  const { t, i18n } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
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
      <HeadComponent title="Belly Revolution" />
      <Banner />
      <div id="page-wrapper">
        <Wrapper banner={checkBanner(router)} className="wrapper">
          <div className="inner">
            <Menu />
          </div>
        </Wrapper>

        <div className="wrapper">
          <div className="inner">
            <GenericPageHeader backgroundPath="/img/belly_back.png" belly />

            <section className="main">
              <p>{t('belly.descriptFirst')}</p>
              <p>{t('belly.descriptSecond')}</p>
            </section>

            <CTAComponent />

            <section className="main">
              <h2>{t('belly.title')}</h2>
              <p>{t('belly.subtitle')}</p>
              <h3>{t('belly.intended')}</h3>
              <CustomList data={namenjenList} />
            </section>

            <section className="main accent2">
              <AboutComponent belly />
            </section>

            <Faq faqs={faqs} />
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
