/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts } from '../../actions';
import { Link, Remove } from '../../assets';
import style from './style';

class ProductInfoHeader extends React.Component {
  state = {
    showLink: false,
    error: false,
    apiLink: '',
  };
  /*
   * reference from here   https://www.quora.com/What-is-the-best-way-to-validate-for-a-URL-in-JavaScript
   */
  validateUrl = str => {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { title, items, isFetching } = this.props.products;

    return (
      <div css={style.sectionStyle}>
        {!this.state.showLink && (
          <div>
            <p className="title">{isFetching ? 'Subcategory name ' : title}</p>
            {isFetching ? (
              <p>Fetching Products</p>
            ) : items ? (
              <p>
                {items.length} <span>{title.toLowerCase()}</span> products
                available
              </p>
            ) : (
              <p>No items available</p>
            )}
          </div>
        )}
        {this.state.showLink && (
          <form
            css={css`
              ${style.formStyle}
            `}
            onSubmit={e => {
              const valid = this.validateUrl(this.state.apiLink);
              this.setState({ error: !valid });

              if (valid) {
                this.props.fetchProducts(this.state.apiLink);
              }
              e.preventDefault();
            }}
          >
            <label htmlFor="customLink">API Subcategory link</label>
            <input
              type="text"
              name="customLink"
              id="customLink"
              value={this.state.apiLink}
              onChange={e => {
                this.setState({ apiLink: e.target.value });
              }}
            />
            {this.state.error && (
              <p
                css={css`
                  ${style.errorStyle}
                `}
              >
                Doesn't seem like a valid url
              </p>
            )}
          </form>
        )}
        <button
          type="button"
          css={css`
            ${style.linkButtonStyle}
          `}
          onClick={() => {
            this.setState({ showLink: !this.state.showLink });
          }}
        >
          {!this.state.showLink ? <Link /> : <Remove />}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { products } = state;
  return { products };
};
const mapDispatchToProps = {
  fetchProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfoHeader);

ProductInfoHeader.propTypes = {
  fetchProducts: PropTypes.func,
};
