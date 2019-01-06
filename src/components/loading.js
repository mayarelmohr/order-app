/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import loading from '../loading.svg';

const Loading = () => {
  return (
    <div>
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
