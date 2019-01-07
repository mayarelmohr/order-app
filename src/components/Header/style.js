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
    }
    .title + p {
      opacity: 0.6;
    }
    svg {
      fill: #d8d8d8;
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
  linkButtonStyle: css`
    background: none;
    opacity: 0.6;
    border: none;
    padding: 0;
    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 1;
    }
  `,
  formStyle: css`
    flex: 1;
    font-size: 13px;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    label {
      display: block;
      text-transform: uppercase;
      font-size: 13px;
    }
    input {
      width: 90%;
      background: none;
      border: none;
      height: 25px;
      line-height: 25px;
      opacity: 0.78;
      font-size: 13px;
      color: #fff;
      border-bottom: solid 1px #fff;
      &:focus {
        opacity: 1;
        outline: none;
      }
    }
  `,
  errorStyle: css`
    color: red;
    position: absolute;
    top: 0;
    right: 10%;
  `,
};
