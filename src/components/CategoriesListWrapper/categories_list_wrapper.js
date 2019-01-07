/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoriesList from './categories_list';
import { getProductsState } from '../../selectors';

/**
 * Component that has the lists for categories that were
 * output by the selector according to the filter values
 */
class CategoriesListWrapper extends React.Component {
  render() {
    const { currentProducts } = this.props;
    return (
      <div>
        {Object.keys(currentProducts).map(key => (
          <CategoriesList key={key} name={key} list={currentProducts[key]} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentProducts: getProductsState(state),
});

export default connect(
  mapStateToProps,
  {}
)(CategoriesListWrapper);

CategoriesListWrapper.propTypes = {
  currentProducts: PropTypes.objectOf(PropTypes.array),
};
