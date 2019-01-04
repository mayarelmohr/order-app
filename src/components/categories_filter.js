/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FilterButton } from '.';
import { fetchProducts, setFilter, setRouter } from '../actions';

const listStyle = css`
  padding: 20px 0;
  white-space: nowrap;
  margin: 0;
  li {
    display: inline-block;
    &:nth-child(n + 1) {
      margin-right: 5px;
      margin-left: 5px;
    }
  }
`;

class CategoriesFilter extends React.Component {
  render() {
    const { list, children, itemClick, checkedValue } = this.props;
    return (
      <div>
        {children}
        <ul css={listStyle}>
          <li>
            <FilterButton
              content={'All'}
              checked={checkedValue === ''}
              onClick={() => {
                itemClick('');
              }}
            />
          </li>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <FilterButton
                  content={item}
                  checked={checkedValue === item}
                  onClick={() => {
                    itemClick(item);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { products, currentRouter } = state;
  return {
    products,
    currentRouter,
  };
};
const mapDispatchToProps = {
  fetchProducts,
  setRouter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesFilter);

CategoriesFilter.propTypes = {
  fetchProducts: PropTypes.func,
  products: PropTypes,
};
