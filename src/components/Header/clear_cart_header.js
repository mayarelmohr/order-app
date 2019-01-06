/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearProduct } from '../../actions';
import style from './style';

class ClearCartHeader extends React.Component {
  render() {
    const { clearProduct } = this.props;
    return (
      <div
        css={css`
          ${style.sectionStyle};
          border-left: solid 1px rgba(202, 202, 202, 0.5);
        `}
      >
        <div>
          <p className="title">Your shopping list</p>
          <p>Proceed to checkout..</p>
        </div>
        <button
          type="button"
          css={css`
            ${style.checkoutButton}
          `}
          onClick={() => {
            clearProduct();
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

const mapStateToProps = () => {};
const mapDispatchToProps = {
  clearProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearCartHeader);

ClearCartHeader.propTypes = {
  clearProduct: PropTypes.func,
};
