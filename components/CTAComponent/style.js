import styled from 'styled-components';

export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  background: #656dba;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CTATitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: white;
`;

export const CTAButton = styled.a`
  display: inline-block;
  background: white;
  color: #656dba;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition:
    background 0.3s ease,
    color 0.3s ease;
  &:hover {
    background: #ff9800;
    color: white;
  }
`;
