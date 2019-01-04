/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getProductsState from '../selectors';

class CategoriesList extends React.Component {
  render() {
    const { list, name } = this.props;
    return (
      <div
        css={css`
          background-color: #faf7fa;
        `}
      >
        {name}
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item.display_name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;

CategoriesList.propTypes = {
  currentProducts: PropTypes.array,
};
