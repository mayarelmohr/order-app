/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import ProductInfoHeader from './product_info_header';
import ClearCartHeader from './clear_cart_header';
import style from './style';

const Header = () => {
  return (
    <div css={style.wrapperStyle}>
      <ProductInfoHeader />
      <ClearCartHeader />
    </div>
  );
};

export default Header;
