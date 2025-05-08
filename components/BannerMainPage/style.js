import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  height: 44px;
  position: fixed;
  z-index: 1;
  background: linear-gradient(90deg, rgba(110, 205, 235) 0%, #ce86dd 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerText = styled.span`
  font-size: 16px;
  line-height: 44px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 10px;
  }
  a {
    color: white;
    text-decoration: none;
    border-bottom: none;
  }
`;
