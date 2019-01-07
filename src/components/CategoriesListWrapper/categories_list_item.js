/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../../actions';
import { Add, Tick, Remove } from '../../assets';
import style from './style';

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
    const price = hasOffer ? offer.price_after_discount : properties.total_selling_price;
    return (
      <div
        css={css`
          ${style.itemSeparator}
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
              ${style.imageWrapper}
            `}
          >
            <picture>
              <source
                srcSet={`${images.small_square}, ${images.medium_square} 2x`}
                media="(min-width: 768px)"
              />
              <img src={images.small_square} alt={itemName} srcSet={`${images.medium_square} 2x`} />
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
            <p css={style.titleStyle}>{itemName}</p>
            <span css={style.priceStyle}>{`AED ${price.toFixed(2)}`}</span>
            <span css={style.discountStyle}>{hasOffer ? `Save ${offer.offer.discount}%` : ''}</span>
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
            css={style.buttonStyle}
            className={this.state.clicked ? 'clicked' : ''}
            onClick={() => {
              this.setState(prevState => ({ clicked: !prevState.clicked }));
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

const mapStateToProps = () => ({});
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
  content: PropTypes.shape({
    offer: PropTypes.object,
    properties: PropTypes.object,
    photo_urls: PropTypes.object,
    computer_descriptor: PropTypes.string,
    cluster_name: PropTypes.string,
  }),
};
