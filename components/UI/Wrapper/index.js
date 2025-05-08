import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: ${(props) => (props.banner ? '6em' : '3em')} !important;

  @media (max-width: 1280px) {
    padding-top: ${(props) => (props.banner ? '3em' : '0')} !important;
  }
`;
