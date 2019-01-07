/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesFilter } from '..';
import style from './style';

class CategoriesFilterWrapper extends React.Component {
  render() {
    const { title, routerList, filterList } = this.props.products;
    return (
      <div
        css={css`
          ${style.wrapperStyle}
        `}
      >
        <CategoriesFilter list={routerList} isRouter>
          <p>
            What type of
            <span>{` ${title.toLowerCase()} `}</span>
            are you looking for?
          </p>
        </CategoriesFilter>

        <CategoriesFilter
          list={filterList}
          isRouter={false}
          style={css`
            ${style.itemStyle}
          `}
        >
          <p>Filter by</p>
        </CategoriesFilter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { products } = state;
  return {
    products,
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesFilterWrapper);

CategoriesFilterWrapper.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    routerList: PropTypes.arrayOf(PropTypes.string),
    filterList: PropTypes.arrayOf(PropTypes.string),
  }),
};
