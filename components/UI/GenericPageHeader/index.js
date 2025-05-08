'use client';
import React from 'react';
import { HeaderWrapper } from './style';
import { useTranslation } from 'react-i18next';

const GenericPageHeader = ({ backgroundPath, belly }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <HeaderWrapper className="main" $backgroundPath={backgroundPath}>
        <h1>{belly ? 'Belly Revolution' : 'Access Bars'}</h1>
        <p>{t('pageHeader')}</p>
      </HeaderWrapper>
    </>
  );
};

export default GenericPageHeader;
