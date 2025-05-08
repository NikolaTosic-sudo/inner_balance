import styled from 'styled-components';

export const ToastWrapper = styled.div`
  .Toastify__toast {
    text-align: center !important;
    justify-content: space-between;
    width: 300px;
    @media (max-width: 400px) {
      width: 100%;
    }
  }
  .Toastify__close-button {
    height: 100% !important;
    top: 0 !important;
    right: 0 !important;
    box-shadow: none !important;
    position: relative !important;
    &:hover {
      box-shadow: none !important;
      background: none;
    }
    &:active {
      box-shadow: none !important;
      background: none;
    }
    &:focus {
      box-shadow: none !important;
      background: none;
    }
  }
`;

export const ToastText = styled.span`
  max-width: 200px;
  @media (max-width: 400px) {
    max-width: 240px;
  }
`;
