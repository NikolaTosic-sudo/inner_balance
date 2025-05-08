import styled from 'styled-components';

export const PickerTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const PickerSubtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const CalendarWrapper = styled.div`
  position: relative !important;
  display: ${(props) => (props.show ? 'block' : 'none')} !important;
`;
