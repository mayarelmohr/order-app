/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesFilter, CategoriesListWrapper } from '.';
import { setFilter, setRouter } from '../actions';

class CategoriesWrapper extends React.Component {
  render() {
    const { title, routerList, filterList } = this.props.products;
    return (
      <div
        css={css`
          background-color: #faf7fa;
        `}
      >
        <CategoriesFilter
          list={routerList}
          itemClick={this.props.setRouter}
          checkedValue={this.props.currentRouter}
        >
          <p>
            What type of <span>{title.toLowerCase()}</span> are you looking for?
          </p>
        </CategoriesFilter>
        <CategoriesFilter
          list={filterList}
          itemClick={this.props.setFilter}
          checkedValue={this.props.currentFilter}
        >
          <p>Filter by</p>
        </CategoriesFilter>
        <CategoriesListWrapper />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { products, currentRouter, currentFilter } = state;
  return {
    products,
    currentRouter,
    currentFilter,
  };
};
const mapDispatchToProps = {
  setRouter,
  setFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesWrapper);

CategoriesWrapper.propTypes = {
  fetchProducts: PropTypes.func,
  products: PropTypes,
};
