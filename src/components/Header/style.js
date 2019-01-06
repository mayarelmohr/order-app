import { css } from '@emotion/core';
import colors from '../../utils/themes';

export default {
  wrapperStyle: css`
    background-color: ${colors.headerColor};
    position: sticky;
    z-index: 1;
    top: 0;
    color: #fff;

    display: flex;
    > div {
      flex-basis: 50%;
      padding: 10px 40px;
    }

    .title {
      margin: 0;
      font-size: 27px;
      text-align: left;
    }
    .title,
    span {
      font-family: 'ProximaNova-semibold';
      font-weight: 400;
    }
    p:not(.title) {
      margin: 0;
      opacity: 0.6;
    }
    svg {
      fill: #d8d8d8;
      opacity: 0.6;
      width: 23px;
      height: 23px;
    }
  `,
  sectionStyle: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  checkoutButton: css`
    background-color: ${colors.checkoutColor};
    padding: 15px 44px;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
    font-family: 'ProximaNova-semibold';
    font-size: 15px;
    border: solid 1px ${colors.checkoutColor};

    &:hover {
      background-color: #fff;
      color: ${colors.checkoutColor};
    }
    &:focus {
      outline: none;
      box-shadow: 2px 4px 5px #4a4848;
    }
  `,
};
