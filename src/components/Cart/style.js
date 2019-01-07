import { css } from '@emotion/core';

export default {
  fixedCart: css`
    position: fixed;
    top: 74px;
    right: 0;
    bottom: 0;
    left: 50%;
    background-color: #fff;
    border-left: solid 1px #cacaca;
    overflow-y: scroll;
  `,
  separator: css`
    border-bottom: solid 1px #e5e5e5;
    border-top: solid 1px #e5e5e5;
    padding: 20px 0;
  `,
  itemStyle: css`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    padding: 18px 40px;
    border-bottom: solid 1px #e5e5e5;
  `,
  priceTitle: css`
    letter-spacing: 1.7px;
    font-family: 'ProximaNova-semibold';
  `,
  currency: css`
    letter-spacing: 2.4px;
    font-size: 24px;
  `,
  emptyMessage: css`
    padding: 40px 0;
    text-align: center;
    opacity: 0.6;
  `,
  description: css`
    letter-spacing: 1.7px;
    margin: 20px;
  `,
};
