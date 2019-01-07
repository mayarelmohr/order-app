/** @jsx jsx */
import { jsx } from '@emotion/core';
import ProductInfoHeader from './product_info_header';
import ClearCartHeader from './clear_cart_header';
import style from './style';
/**
 * The wrapper header component
 */
const Header = () => (
  <div css={style.wrapperStyle}>
    <ProductInfoHeader />
    <ClearCartHeader />
  </div>
);

export default Header;
