'use client';
import React from 'react';
import {
  FaqAnswer,
  FaqQuestion,
  FaqQuestionContainer,
  FaqSection,
  FaqTitle,
} from './style';
import { useTranslation } from 'react-i18next';

const Faq = ({ faqs }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <FaqSection className="main">
        <FaqTitle>{t('barsFaqs.title')}</FaqTitle>
        <FaqQuestionContainer>
          {faqs &&
            faqs?.map((faq, index) => (
              <div key={index}>
                <FaqQuestion>
                  {index + 1}. {t(faq?.question)}
                </FaqQuestion>
                <FaqAnswer>{t(faq?.answer)}</FaqAnswer>
              </div>
            ))}
        </FaqQuestionContainer>
      </FaqSection>
    </>
  );
};

export default Faq;
