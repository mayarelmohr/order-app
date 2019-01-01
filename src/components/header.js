/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
  const headerColor = '#674EA7';
  return (
    <div
      css={css`
        background-color: ${headerColor};
        color: #fff;
      `}
    >
      {children}
    </div>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.array,
};
