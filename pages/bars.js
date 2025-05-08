'use client';
import Menu from '@/components/UI/Menu';
import '../app/main.css';
import Footer from '@/components/UI/Footer';
import GenericPageHeader from '@/components/UI/GenericPageHeader';
import CustomList from '@/components/UI/List';
import HeadComponent from '@/components/Head';
import Faq from '@/components/Faq';
import AboutComponent from '@/components/AboutComponent';
import CTAComponent from '@/components/CTAComponent';
import Banner from '@/components/Banner';
import Newsletter from '@/components/NewsletterComponent';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import RootLayout from '@/app/layout';
import { Wrapper } from '@/components/UI/Wrapper';
import { useRouter } from 'next/router';
import { checkBanner } from '@/components/Banner/util';
import { useSearchParams } from 'next/navigation';

const namenjenList = [
  'customBarsList.first',
  'customBarsList.second',
  'customBarsList.third',
  'customBarsList.fourth',
  'customBarsList.fifth',
  'customBarsList.sixth',
  'customBarsList.seventh',
];

const faqs = [
  {
    question: 'barsFaqs.firstQuestion',
    answer: 'barsFaqs.firstAnswer',
  },
  {
    question: 'barsFaqs.secondQuestion',
    answer: 'barsFaqs.secondAnswer',
  },
  {
    question: 'barsFaqs.thirdQuestion',
    answer: 'barsFaqs.thirdAnswer',
  },
];

export default function Bars() {
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
      <HeadComponent title="Access Bars" />
      <Banner />
      <div id="page-wrapper">
        <Wrapper banner={checkBanner(router)} className="wrapper">
          <div className="inner">
            <Menu />
          </div>
        </Wrapper>

        <div className="wrapper">
          <div className="inner">
            <GenericPageHeader backgroundPath="/img/bars.jpg" />

            <section className="main">
              <p>{t('bars.descriptFirst')}</p>
              <p>{t('bars.descriptSecond')}</p>
            </section>

            <CTAComponent />

            <section className="main">
              <h2>{t('bars.title')}</h2>
              <p>{t('bars.subtitle')}</p>
              <h3>{t('bars.intended')}</h3>
              <CustomList data={namenjenList} />
            </section>

            <section className="main accent2">
              <AboutComponent />
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
