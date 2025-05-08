import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectButton = styled.select`
  background-color: #4e5266;
  color: white;
  border: none;
  outline: none;
  appearance: none;
  font-size: 36px;
  padding: 0;
  margin: 0;
  height: auto;
  line-height: 0.7;

  cursor: pointer;

  &::-ms-expand {
    display: none;
  }

  &:focus {
    border-color: transparent;
    outline: none;
  }

  &:hover {
    background-color: #3b3f56;
  }

  @media (max-width: 1280px) {
    font-size: 28px;
    line-height: 44px;
  }
`;
