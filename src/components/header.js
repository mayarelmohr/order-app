/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import colors from '../utils/themes';

const Header = ({ children }) => {
  return (
    <div
      css={css`
        background-color: ${colors.headerColor};
        color: #fff;
        padding: 10px 40px;
        h1 {
          margin: 0;
          font-size: 27px;
        }
        h1,
        span {
          font-family: 'ProximaNova-semibold';
          font-weight: 400;
        }
        p {
          margin: 0;
          opacity: 0.6;
        }
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
