import styled from 'styled-components';
import { between, rem, rgba } from 'polished';
import vars from '../../../style/Vars';

export const FooterWrap = styled.footer`
  position: relative;
  padding-top: ${rem('160px')};
  padding-bottom: ${rem('60px')};
  @media (max-width: ${vars.media.xlMin}) {
    padding-top: ${between('80px', '160px')};
  }
  .row {
    > div {
      margin-bottom: 50px;
    }
  }
  h3 {
    font-size: ${rem('16px')};
    color: white;
  }
  p {
    color: white;
    line-height: 1.5;
    font-weight: 500;
    max-width: 360px;
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: 44px;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    a {
      font-weight: 500;
      line-height: 1.5;
      color: ${rgba(255, 255, 255, 0.9)};
      position: relative;
      &:before {
        content: '';
        display: block;
        height: 1px;
        background-color: ${rgba(255, 255, 255, 0.9)};
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: -2px;
        transition: ${vars.transitions.hover5};
        transform: scaleX(0);
        transform-origin: right center;
      }
      &:hover {
        color: white;
        &:before {
          transform: scaleX(1);
          transform-origin: left center;
        }
      }
    }
  }
`;

export const FooterInfos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  li {
    font-weight: 500;
    line-height: 1.5;
    color: ${rgba(255, 255, 255, 0.9)};
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const FooterSocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 -6px;
  display: flex;
  li {
    padding: 0 6px;
    a:hover {
      img {
        transition: ${vars.transitions.hover1};
        opacity: 0.75;
      }
    }
  }
`;
