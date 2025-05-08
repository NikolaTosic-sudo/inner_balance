import styled from 'styled-components';

export const PractitionerSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const PractitionerTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #2d3748 !important;
  text-align: center;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

export const PractitionerDescription = styled.p`
  color: #4a5568;
  text-align: center;
  margin-bottom: 36px;
`;

export const CertificateContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestimonialContainer = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  .ant-image {
    width: 100% !important;
  }
`;

export const TestimonialContent = styled.div`
  padding: 16px 0 0 0;
`;

export const TestimonialText = styled.p`
  font-style: italic;
  color: #555;
  margin-bottom: 0px;
`;

export const TestimonialAuthor = styled.p`
  font-weight: bold;
  color: #333;
  margin-bottom: 24px;
`;

export const MoreReviewsLink = styled.a`
  display: block;
  text-align: center;
  color: #656dba !important;
  margin: 0;
  font-weight: bold;
  text-decoration: none;
  border: none;
  &:hover {
    text-decoration: underline;
  }
`;
