/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import loading from '../loading.svg';

const Loading = () => {
  return (
    <div
      css={css`
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
      `}
    >
      <img src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
