/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CategoriesListItem } from './index';
import { getSum } from '../selectors';

class CartWrapper extends React.Component {
  render() {
    const { currentProducts, total } = this.props;
    //const currentProducts = [];
    return (
      <div
        css={css`
          position: fixed;
          top: 74px;
          right: 0;
          bottom: 0;
          left: 50%;
          background-color: #fff;
          border-left: solid 1px #cacaca;
          overflow-y: scroll;
        `}
      >
        <div
          css={css`
            margin: 0 20px;
          `}
        >
          <p
            css={css`
              letter-spacing: 1.7px;
              margin: 20px;
            `}
          >
            What's in your shopping list?
          </p>
          <ul
            css={css`
              border-bottom: solid 1px #e5e5e5;
              border-top: solid 1px #e5e5e5;
              padding: 20px 0;
            `}
          >
            {currentProducts.length === 0 && (
              <p
                css={css`
                  padding: 40px 0;
                  text-align: center;
                  opacity: 0.6;
                `}
              >
                Your cart is still empty
              </p>
            )}
            {currentProducts.map((item, index) => {
              return (
                <li key={index}>
                  <CategoriesListItem cart content={item} />
                </li>
              );
            })}
          </ul>
          {currentProducts.length > 0 && (
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                text-transform: uppercase;
                padding: 18px 40px;
                border-bottom: solid 1px #e5e5e5;
              `}
            >
              <span
                css={css`
                  letter-spacing: 1.7px;
                  font-family: 'ProximaNova-semibold';
                `}
              >
                Total
              </span>
              <span
                css={css`
                  letter-spacing: 2.4px;
                  font-size: 24px;
                `}
              >{`AED ${total.toFixed(2)}`}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentProducts: state.cart,
    total: getSum(state.cart),
  };
};

export default connect(
  mapStateToProps,
  {}
)(CartWrapper);

CartWrapper.propTypes = {
  currentProducts: PropTypes.object,
};
