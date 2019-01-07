/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FilterButton } from '.';
import { fetchProducts, setRouter } from '../actions';

const listStyle = css`
  white-space: nowrap;
  margin-bottom: 10px;
  padding: 10px 10px;
  overflow-x: auto;
  li {
    display: inline-block;
    &:nth-child(n + 1) {
      margin-right: 5px;
      margin-left: 5px;
    }
  }
`;
const wrapperStyle = css`
  padding-top: 20px;
  position: relative;
`;

class CategoriesFilter extends React.Component {
  render() {
    const { list, children, itemClick, checkedValue, style } = this.props;
    return (
      <div css={[wrapperStyle, style]}>
        {children}
        <ul css={listStyle}>
          <li>
            <FilterButton
              content="All"
              checked={checkedValue === ''}
              onClick={() => {
                itemClick('');
              }}
            />
          </li>
          {list.map(item => (
            <li key={item.id}>
              <FilterButton
                content={item}
                checked={checkedValue === item}
                onClick={() => {
                  itemClick(item);
                }}
              />
            </li>
          ))}
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
