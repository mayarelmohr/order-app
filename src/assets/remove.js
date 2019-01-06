import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const wrapperStyle = css`
  position: relative;
  width: 20px;
  height: 20px;
  span {
    width: 20px;
    height: 2px;
    display: inline-block;
    background-color: #d0d0d0;
  }
`;
const Remove = () => {
  return (
    <div css={wrapperStyle}>
      <span
        css={css`
          transform: rotate(45deg);
          position: absolute;
          top: 8px;
        `}
      />
      <span
        css={css`
          transform: rotate(-45deg);
        `}
      />
    </div>
  );
};
export default Remove;
