import { css } from '@emotion/core';

export default {
  listStyle: css`
    white-space: nowrap;
    margin-bottom: 10px;
    padding: 10px 10px;
    overflow-x: auto;
    li {
      display: inline-block;
      &:nth-child(n + 1) {
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  `,
  wrapperStyle: css`
    padding-top: 20px;
    position: relative;
  `,
};
