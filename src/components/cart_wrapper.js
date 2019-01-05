/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesListItem } from './index';

class CartWrapper extends React.Component {
  render() {
    const { currentProducts } = this.props;
    //const currentProducts = [];
    return (
      <ul>
        <p>What's in your shopping list?</p>
        {currentProducts.map((item, index) => {
          return (
            <li key={index}>
              <CategoriesListItem cart content={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentProducts: state.cart,
  };
};

export default connect(
  mapStateToProps,
  {}
)(CartWrapper);

CartWrapper.propTypes = {
  currentProducts: PropTypes.object,
};
