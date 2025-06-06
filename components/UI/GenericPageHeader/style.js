import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 600px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$backgroundPath}) center/cover no-repeat;

  h1 {
    color: white;
  }
`;
