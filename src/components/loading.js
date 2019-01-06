/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import loading from '../loading.svg';

const Loading = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 74px);
      `}
    >
      <img
        css={css`
          width: 24px;
          height: 24px;
        `}
        src={loading}
        alt="Loading"
      />
    </div>
  );
};

export default Loading;
