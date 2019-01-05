/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { CategoriesListWrapper, CategoriesFilterWrapper } from '.';

const CategoriesWrapper = () => {
  return (
    <div>
      <CategoriesFilterWrapper />
      <CategoriesListWrapper />
    </div>
  );
};
export default CategoriesWrapper;
