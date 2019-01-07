/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import loading from './loading.svg';
import style from './style';

const Loading = () => (
  <div
    css={css`
      ${style.loadingWrapper}
    `}
  >
    <img
      css={css`
        ${style.icon}
      `}
      src={loading}
      alt="Loading"
    />
  </div>
);

export default Loading;
