import { css } from '@emotion/core';

export default {
  buttonStyle: css`
    background-color: #fff;
    color: #fff;
    height: 44px;
    text-transform: uppercase;
    color: #707377;
    padding: 0 12px;
    font-family: inherit;
    line-height: 44px;
    position: relative;
    font-size: 13px;
    border: solid 1px #c7ccd2;
    border-radius: 4px;
    letter-spacing: 0.5px;
    &:focus {
      outline: none;
      box-shadow: 2px 4px 5px #bbbbbb;
    }
  `,
  checkedStyle: css`
    color: #8800ac;
    &:after {
      content: '';
      left: 0;
      right: 0;
      height: 4px;
      display: inline-block;
      position: absolute;
      bottom: 0;
      background-color: #8800ac;
    }
  `,
};
