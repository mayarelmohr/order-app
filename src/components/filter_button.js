/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Filter = ({ content, onClick, checked }) => {
  const checkedStyle = `color: #8800ac;
  border-bottom: solid 4px;`;
  return (
    <button
      css={css`
        background-color: #fff;
        color: #fff;
        height: 44px;
        text-transform: uppercase;
        color: #707377;
        padding: 14px 12px;
        font-size: 13px;
        border: solid 1px #c7ccd2;
        border-radius: 4px;
        letter-spacing: 0.5px;
        &:focus {
          outline: none;
          box-shadow: 2px 4px 5px #bbbbbb;
        }
        ${checked ? checkedStyle : ''}
      `}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Filter;

Filter.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
};
