'use client';
import React from 'react';
import { CTAButton, CTASection, CTATitle } from './style';
import { useTranslation } from 'react-i18next';

const CTAComponent = () => {
  const { t } = useTranslation('common');

  return (
    <CTASection>
      <CTATitle>{t('cta.title')}</CTATitle>
      <CTAButton href="/contact">{t('cta.button')}</CTAButton>
    </CTASection>
  );
};

export default CTAComponent;
