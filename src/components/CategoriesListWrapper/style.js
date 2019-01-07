import { css } from '@emotion/core';
import colors from '../../utils/themes';

export default {
  titleStyle: css`
    color: #6f8094;
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
  `,
  priceStyle: css`
    color: ${colors.primaryColor};
    font-size: 14px;
  `,
  discountStyle: css`
    color: #4dc498;
    font-size: 14px;
    padding-left: 17px;
  `,
  buttonStyle: css`
    width: 24px;
    height: 24px;
    border: solid 1px ${colors.primaryColor};
    background-color: #fff;
    border-radius: 50%;
    padding: 0;
    svg {
      width: 12px;
      height: 12px;
      fill: ${colors.primaryColor};
      vertical-align: middle;
    }
    &:focus {
      outline: none;
      box-shadow: 2px 4px 5px #bbbbbb;
    }
    &:hover,
    &.clicked {
      background-color: ${colors.primaryColor};
      svg {
        fill: #fff;
      }
    }
    &.clicked:hover {
      background-color: #fff;
      svg {
        fill: ${colors.primaryColor};
      }
    }
  `,
  itemSeparator: css`
    display: flex;
    padding: 7px;
    justify-content: space-between;
    align-items: center;
  `,
  imageWrapper: css`
    display: inline-block;
    width: 8%;
    min-width: 50px;
  `,
  wrapperStyle: css`
    background-color: #fff;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0px 2px 5px 0px #e8e8ef;
  `,
};
