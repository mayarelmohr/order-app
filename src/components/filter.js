/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Filter = ({ content }) => {
  return (
    <button
      css={css`
        background-color: #fff;
        color: #fff;
        text-transform: uppercase;
        color: #707377;
        padding: 14px 12px;
        font-size: 13px;
        border: solid 1px #c7ccd2;
        border-radius: 4px;
        letter-spacing: 0.5px;
      `}
    >
      {content}
    </button>
  );
};

export default Filter;

Filter.propTypes = {
  content: PropTypes.string,
};
