'use client';
import React from 'react';
import {
  CertificateContainer,
  LeftContainer,
  MoreReviewsLink,
  PractitionerDescription,
  PractitionerSection,
  PractitionerTitle,
  RightContainer,
  TestimonialAuthor,
  TestimonialContainer,
  TestimonialContent,
  TestimonialImage,
  TestimonialText,
} from './style';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const Image = dynamic(() => import('antd/es/image'), { ssr: false });

const AboutComponent = ({ belly }) => {
  const { t } = useTranslation('common');

  return (
    <PractitionerSection>
      <LeftContainer>
        <PractitionerTitle>{t('aboutComp.title')}</PractitionerTitle>
        <PractitionerDescription>
          {belly ? (
            <>{t('aboutComp.bellyDescr')}</>
          ) : (
            <>{t('aboutComp.barsDescr')}</>
          )}
        </PractitionerDescription>
        <CertificateContainer>
          {belly ? (
            <Image
              src="/img/belly_cert.png"
              alt="Sertifikat 1"
              style={{ borderRadius: 8, maxWidth: 300 }}
            />
          ) : (
            <>
              <Image
                src="/img/bars_cert.png"
                alt="Sertifikat 1"
                style={{ borderRadius: 8 }}
              />
              <Image
                src="/img/foundation_cert.png"
                alt="Sertifikat 2"
                style={{ borderRadius: 8 }}
              />
            </>
          )}
        </CertificateContainer>
      </LeftContainer>
      <RightContainer>
        <TestimonialContainer>
          <Image
            src={belly ? '/img/belly_test_1.jpeg' : '/img/bars_test_6.jpeg'}
            alt="Screenshot poruke"
            style={{
              height: 250,
              objectFit: 'cover',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />
          <TestimonialContent>
            <TestimonialText>
              &quot;
              {belly
                ? t('aboutComp.testTextBelly')
                : t('aboutComp.testTextBars')}
              &quot;
            </TestimonialText>
            <TestimonialAuthor>- NN</TestimonialAuthor>
            <MoreReviewsLink href="/#testimonials" target="_blank">
              {t('aboutComp.moreTest')}
            </MoreReviewsLink>
          </TestimonialContent>
        </TestimonialContainer>
      </RightContainer>
    </PractitionerSection>
  );
};

export default AboutComponent;
