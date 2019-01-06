/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesList } from '.';
import { getProductsState } from '../selectors';

class CategoriesListWrapper extends React.Component {
  render() {
    const { currentProducts } = this.props;
    return (
      <div>
        {Object.keys(currentProducts).map((key, index) => (
          <CategoriesList key={index} name={key} list={currentProducts[key]} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentProducts: getProductsState(state),
  };
};

export default connect(
  mapStateToProps,
  {}
)(CategoriesListWrapper);

CategoriesListWrapper.propTypes = {
  currentProducts: PropTypes.object,
};
