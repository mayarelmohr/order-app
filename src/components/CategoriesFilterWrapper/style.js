import { css } from '@emotion/core';

export default {
  itemStyle: css`
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 20px;
      left: 20px;
      height: 1px;
      background-color: #e3eaf0;
    }
    ul {
      margin-left: 20px;
    }
  `,
  wrapperStyle: css`
    background-color: #faf7fa;
    border-bottom: solid 1px #c7c6c7;
    p {
      margin: 0 10px 10px 40px;
      letter-spacing: 1.7px;
      color: #6b7a8f;
    }
    span {
      font-family: 'ProximaNova-semibold';
      font-weight: 400;
    }
  `,
};
