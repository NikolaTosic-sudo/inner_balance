import styled, { css } from 'styled-components';

export const MenuButton = styled.li`
  :hover {
    cursor: pointer;
  }
  div {
    display: inline-block;
    line-height: inherit;
    padding: 0.5em 1em;
  }
`;

export const MenuNav = styled.nav`
  ${(props) =>
    props.visible &&
    css`
      visibility: visible !important;
      right: 260px !important;
      transition: all 0.5s ease-in-out !important;
    `}
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const LangWrap = styled.ul`
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
