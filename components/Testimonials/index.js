'use client';
import React from 'react';
import { testimonials } from './data';
import { Card, Image } from 'antd';
import { Row, Col } from 'styled-bootstrap-grid';
import { useTranslation } from 'react-i18next';

const { Meta } = Card;

const Testimonials = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <header className="major" id="testimonials">
        <h2>{t('testimonials.title')}</h2>
        <p>{t('testimonials.subtitle')}</p>
      </header>

      <Row>
        {testimonials.map((tes) => (
          <Col
            key={tes.id}
            md={6}
            sm={12}
            gap={8}
            style={{ paddingBottom: 24 }}
          >
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={<Image alt={tes.message} src={tes.image} />}
            >
              <Meta style={{ textAlign: 'center' }} title={tes.service} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Testimonials;
