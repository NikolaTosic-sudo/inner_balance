'use client';
import Link from 'next/link';
import { BannerText, BannerWrapper } from './style';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { checkBanner } from './util';

const Banner = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  if (!checkBanner(router)) return null;

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

export default Banner;
