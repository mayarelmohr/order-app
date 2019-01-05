/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesFilter } from '.';
import { setFilter, setRouter } from '../actions';

class CategoriesFilterWrapper extends React.Component {
  render() {
    const { title, routerList, filterList } = this.props.products;
    return (
      <div
        css={css`
          background-color: #faf7fa;
          border-bottom: solid 1px #c7c6c7;
          p {
            margin: 0 10px 20px 40px;
            letter-spacing: 1.7px;
            color: #6b7a8f;
          }
          span {
            font-family: 'ProximaNova-semibold';
            font-weight: 400;
          }
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
          style={css`
            &:before {
              content: '';
              position: absolute;
              top: 0;
              right: 20px;
              left: 20px;
              height: 1px;
              background-color: #e3eaf0;
            }
          `}
        >
          <p>Filter by</p>
        </CategoriesFilter>
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
)(CategoriesFilterWrapper);

CategoriesFilterWrapper.propTypes = {
  fetchProducts: PropTypes.func,
  products: PropTypes,
};
