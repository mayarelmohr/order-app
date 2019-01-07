/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CategoriesListWrapper, CategoriesFilterWrapper } from '.';

const CategoriesWrapper = () => (
  <div
    css={css`
      flex: 1;
    `}
  >
    <CategoriesFilterWrapper />
    <CategoriesListWrapper />
  </div>
);
export default CategoriesWrapper;
