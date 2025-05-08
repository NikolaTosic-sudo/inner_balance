import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  max-width: ${(props) => (props.width ? props.width : '286px')};
`;

export const InputForm = styled.input`
  padding-left: 12px;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #e2e6e8;
  border-radius: 8px;
  width: 100%;
  &:focus {
    border: 2px solid #1e87ff;
    outline: transparent;
  }
  &::placeholder {
    color: #a0a7ab;
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #1e2328;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 11px;
  right: 10px;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  .select {
    font-size: 14px;
    line-height: 20px;
  }
`;
