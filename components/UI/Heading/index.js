//styles
import styled, { css } from 'styled-components';
import { between, rem } from 'polished';
import vars from '../../../style/Vars';

//styled
const Heading = styled.h1`
  color: ${vars.colors.text};
  font-size: ${(props) =>
    props.fontSize ? rem(props.fontSize + 'px') : rem('40px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.2)};
  margin-bottom: ${(props) =>
    props.marginBottom ? rem(props.marginBottom + 'px') : rem('20px')};
  @media (max-width: ${vars.media.lgMax}) {
    font-size: ${(props) =>
      props.size
        ? between(props.fontSize - 10 + 'px', props.fontSize + 'px')
        : between('30px', '40px')};
  }
  /* Heading1 */
  ${(props) =>
    props.heading1 &&
    css`
      font-size: ${(props) =>
        props.fontSize ? rem(props.fontSize + 'px') : rem('64px')};
      line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1)};
      font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '800')};
      letter-spacing: -1.5px;
      @media (max-width: ${vars.media.lgMax}) {
        font-size: ${(props) =>
          props.size
            ? between(props.fontSize - 10 + 'px', props.fontSize + 'px')
            : between('40px', '64px')};
      }
    `}
  /* Heading2 */
  ${(props) =>
    props.heading2 &&
    css`
      font-size: ${(props) =>
        props.fontSize ? rem(props.fontSize + 'px') : rem('48px')};
      line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.08)};
      font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
      letter-spacing: -0.8px;
      @media (max-width: ${vars.media.lgMax}) {
        font-size: ${(props) =>
          props.size
            ? between(props.fontSize - 10 + 'px', props.fontSize + 'px')
            : between('34px', '48px')};
      }
    `}
  /* Heading3 */
  ${(props) =>
    props.heading3 &&
    css`
      font-size: ${(props) =>
        props.fontSize ? rem(props.fontSize + 'px') : rem('32px')};
      line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.25)};
      font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
      letter-spacing: -0.1px;
      @media (max-width: ${vars.media.lgMax}) {
        font-size: ${(props) =>
          props.size
            ? between(props.fontSize - 8 + 'px', props.fontSize + 'px')
            : between('26px', '32px')};
      }
    `}
  /* Heading4 */
  ${(props) =>
    props.heading4 &&
    css`
      font-size: ${(props) =>
        props.fontSize ? rem(props.fontSize + 'px') : rem('22px')};
      line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.27)};
      font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
      @media (max-width: ${vars.media.lgMax}) {
        font-size: ${(props) =>
          props.fontSize ? rem(props.fontSize + 'px') : rem('22px')};
      }
    `}
  /* Heading5 */
  ${(props) =>
    props.heading5 &&
    css`
      font-size: ${(props) =>
        props.fontSize ? rem(props.fontSize + 'px') : rem('18px')};
      line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.17)};
      font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
      @media (max-width: ${vars.media.lgMax}) {
        font-size: ${(props) =>
          props.fontSize ? rem(props.fontSize + 'px') : rem('18px')};
      }
    `}
  /* Heading6 */
  ${(props) =>
    props.heading6 &&
    css`
      font-size: ${(props) =>
        props.fontSize ? rem(props.fontSize + 'px') : rem('16px')};
    `}
`;

export default Heading;
