/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesWrapper, Loading } from '.';
import { fetchProducts } from '../actions';

class ProductsWrapper extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  renderProductsList(isFetching, items) {
    if (isFetching) {
      return <Loading />;
    } else {
      if (items && items.length > 0) {
        return <CategoriesWrapper />;
      }
    }
    return <p>There are no items in list</p>;
  }
  render() {
    const { items, isFetching } = this.props.products;

    return (
      <div
        css={css`
          background-color: #faf7fa;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 74px);
        `}
      >
        {this.renderProductsList(isFetching, items)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { products } = state;
  return { products };
}
const mapDispatchToProps = {
  fetchProducts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsWrapper);
ProductsWrapper.propTypes = {
  fetchProducts: PropTypes.func,
  products: PropTypes,
};
