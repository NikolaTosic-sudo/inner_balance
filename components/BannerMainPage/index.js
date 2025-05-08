'use client';
import Link from 'next/link';
import { BannerText, BannerWrapper } from './style';
import { useTranslation } from 'react-i18next';

const BannerMainPage = () => {
  const { t } = useTranslation('common');

  return (
    <BannerWrapper>
      <BannerText>
        <Link
          href={{ pathname: '/contact', query: { appointmentType: 'barsa' } }}
          target="_blank"
        >
          {t('banner')}
        </Link>
      </BannerText>
    </BannerWrapper>
  );
};

export default BannerMainPage;
