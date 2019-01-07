/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesWrapper, Loading } from '..';
import { fetchProducts } from '../../actions';
import style from './style';

/**
 * The left pane of the website
 * Which contains teh filters and currents products
 */
class ProductsWrapper extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProductsList = (isFetching, items) => {
    if (isFetching) {
      return <Loading />;
    }
    if (items && items.length > 0) {
      return <CategoriesWrapper />;
    }

    return (
      <div
        css={css`
          ${style.wrapper}
        `}
      >
        <p>There are no items in list</p>
      </div>
    );
  };

  render() {
    const { items, isFetching } = this.props.products;
    return (
      <div
        css={css`
          background-color: #faf7fa;
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
  products: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }),
};
