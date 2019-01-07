/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesListItem } from '../index';
import { getSum } from '../../selectors';
import style from './style';

/**
 * Wrapper for cart list
 * It has the iotion to remove elements from cart
 * In addtion to the total price of list
 */
class CartWrapper extends React.Component {
  render() {
    const { currentProducts, total } = this.props;
    return (
      <div
        css={css`
          ${style.fixedCart}
        `}
      >
        <div
          css={css`
            margin: 0 20px;
          `}
        >
          <p
            css={css`
              ${style.description}
            `}
          >
            What&apos;s in your shopping list?
          </p>
          <ul
            css={css`
              ${style.separator}
            `}
          >
            {currentProducts.length === 0 && (
              <p
                css={css`
                  ${style.emptyMessage}
                `}
              >
                Your cart is still empty
              </p>
            )}
            {currentProducts.map(item => (
              <li key={item.id}>
                <CategoriesListItem cart content={item} />
              </li>
            ))}
          </ul>
          {currentProducts.length > 0 && (
            <div
              css={css`
                ${style.itemStyle}
              `}
            >
              <span
                css={css`
                  ${style.priceTitle}
                `}
              >
                Total
              </span>
              <span
                css={css`
                  ${style.currency}
                `}
              >
                {`AED ${total.toFixed(2)}`}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentProducts: state.cart,
  total: getSum(state.cart),
});

export default connect(
  mapStateToProps,
  {}
)(CartWrapper);

CartWrapper.propTypes = {
  currentProducts: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
};
