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
      `}
    >
      <img src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
