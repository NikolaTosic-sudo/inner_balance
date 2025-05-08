import React, { useEffect } from 'react';
import styled from 'styled-components';

export const OutsideWrapper = styled.div``;

const ClickOutside = ({
  reff,
  children,
  inside,
  condition = true,
  func,
  when,
}) => {
  const Click = (ref, condition, func, when) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (inside) {
          if (
            ref.current &&
            ref.current.contains(event.target) &&
            when &&
            condition
          ) {
            func();
          }
        } else {
          if (
            ref.current &&
            !ref.current.contains(event.target) &&
            when &&
            condition
          ) {
            func();
          }
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, condition, func, when]);
  };

  reff && Click(reff, condition, func, when);

  return <OutsideWrapper ref={reff}>{children}</OutsideWrapper>;
};

export default ClickOutside;
