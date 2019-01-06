/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../actions';
import colors from '../utils/themes';
import { Add, Tick, Remove } from '../assets';

const titleStyle = css`
  color: #6f8094;
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
`;
const priceStyle = css`
  color: ${colors.primaryColor};
  font-size: 14px;
`;
const discountStyle = css`
  color: #4dc498;
  font-size: 14px;
  padding-left: 17px;
`;
const buttonStyle = css`
  width: 24px;
  height: 24px;
  border: solid 1px ${colors.primaryColor};
  background-color: #fff;
  border-radius: 50%;
  padding: 0;
  svg {
    width: 12px;
    height: 12px;
    fill: ${colors.primaryColor};
    vertical-align: middle;
  }
  &:focus {
    outline: none;
    box-shadow: 2px 4px 5px #bbbbbb;
  }
  &:hover,
  &.clicked {
    background-color: ${colors.primaryColor};
    svg {
      fill: #fff;
    }
  }
  &.clicked:hover {
    background-color: #fff;
    svg {
      fill: ${colors.primaryColor};
    }
  }
`;

class CategoriesListItem extends React.Component {
  state = {
    clicked: false,
  };

  render() {
    const {
      offer,
      properties,
      photo_urls: images,
      computer_descriptor: itemName,
      cluster_name: clusterName,
    } = this.props.content;

    const hasOffer = offer !== null;
    const price = hasOffer
      ? offer.price_after_discount
      : properties.total_selling_price;
    return (
      <div
        css={css`
          display: flex;
          padding: 7px;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              display: inline-block;
              width: 8%;
              min-width: 50px;
            `}
          >
            <picture>
              <source
                srcSet={`${images['small_square']}, ${
                  images['medium_square']
                } 2x`}
                media="(min-width: 768px)"
              />
              <img
                src={images['small_square']}
                alt={itemName}
                srcSet={`${images['medium_square']} 2x`}
              />
            </picture>
          </div>
          <div
            css={css`
              padding-left: 7px;
            `}
          >
            {this.props.cart ? (
              <p
                className="subtitle"
                css={css`
                  margin-bottom: 0;
                `}
              >
                {clusterName}
              </p>
            ) : null}
            <p css={titleStyle}>{itemName}</p>
            <span css={priceStyle}>{`AED ${price}`}</span>
            <span css={discountStyle}>
              {hasOffer ? `Save ${offer.offer.discount}%` : ''}
            </span>
          </div>
        </div>
        {this.props.cart && (
          <button
            type="button"
            onClick={() => {
              this.props.removeProduct(this.props.content);
            }}
          >
            <Remove />
          </button>
        )}
        {!this.props.cart && (
          <button
            type="button"
            css={buttonStyle}
            className={this.state.clicked ? 'clicked' : ''}
            onClick={() => {
              this.setState({ clicked: !this.state.clicked });
              const item = {
                ...this.props.content,
                ...{ cluster_name: this.props.clusterName },
                ...{ price },
              };
              if (this.state.clicked) {
                this.props.removeProduct(item);
              } else {
                this.props.addProduct(item);
              }
            }}
          >
            {this.state.clicked ? <Tick /> : <Add />}
          </button>
        )}
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
  addProduct,
  removeProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesListItem);

CategoriesListItem.propTypes = {
  fetchProducts: PropTypes.func,
  products: PropTypes,
};
