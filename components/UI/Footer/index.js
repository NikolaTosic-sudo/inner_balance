'use client';
import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'styled-bootstrap-grid';
//components
import Container from '../../UI/Container';
import Heading from '../../UI/Heading';
//style
import {
  FooterInfos,
  FooterLinks,
  FooterLogo,
  FooterWrap,
  FooterSocialIcons,
} from './style';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const FollowUs = ({ t }) => {
  return (
    <>
      <Heading as="h3">{t('footer.follow')}</Heading>
      <FooterSocialIcons>
        <li>
          <a
            href="https://www.instagram.com/_innerbalance/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'white' }}
          >
            <Image
              width={32}
              height={32}
              src="/svg/instagram.svg"
              alt="Inner Balance Instagram"
            />
          </a>
        </li>
        {/* <li>
          <a href='' target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <Image src="/svg/twitter.svg" alt="Inner Balance Twitter" />
          </a>
        </li> */}
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61571935846292"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'white' }}
          >
            <Image
              width={32}
              height={32}
              src="/svg/facebook.svg"
              alt="Inner Balance Facebook"
            />
          </a>
        </li>
      </FooterSocialIcons>
    </>
  );
};

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <FooterWrap>
      <Container>
        <Row className="row">
          <Col sm={12} lg={4}>
            <FooterLogo>
              <Image
                width={128}
                height={128}
                src="/img/inner_balance_logo.png"
                className="logo"
                alt="Inner Balance"
              />
            </FooterLogo>
            <p>{t('footer.text')}</p>
          </Col>

          <Col sm={3} lg={3}>
            <Heading as="h3">{t('footer.offer')}</Heading>
            <FooterLinks>
              <li>
                <Link href="/bars">Access Bars</Link>
              </li>
              <li>
                <Link href="/belly">Belly Revolution</Link>
              </li>
              <li>
                <Link href="/contact">{t('menu.schedule')}</Link>
              </li>
            </FooterLinks>
          </Col>

          <Col sm={6} lg={2}>
            <FollowUs t={t} />
          </Col>
          <Col sm={6} lg={3}>
            <Heading as="h3">{t('footer.contact')}</Heading>
            <FooterInfos>
              <li>
                <a href="" style={{ color: 'white' }}>
                  info@theinnerbalance.me
                </a>
              </li>
            </FooterInfos>
          </Col>
        </Row>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
