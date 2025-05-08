import styled from 'styled-components';
import vars from '../../../style/Vars';

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : vars.maxWidth)};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export default Container;
