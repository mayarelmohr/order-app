/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import colors from '../utils/themes';
import { clearProduct } from '../actions';

class Header extends React.Component {
  render() {
    const { children, clearProduct } = this.props;
    return (
      <div
        css={css`
          background-color: ${colors.headerColor};
          position: sticky;
          z-index: 1;
          top: 0;
          color: #fff;

          display: flex;
          > div {
            flex-basis: 50%;
            padding: 10px 40px;
          }

          .title {
            margin: 0;
            font-size: 27px;
            text-align: left;
          }
          .title,
          span {
            font-family: 'ProximaNova-semibold';
            font-weight: 400;
          }
          p:not(.title) {
            margin: 0;
            opacity: 0.6;
          }
        `}
      >
        <div>{children}</div>
        <div
          css={css`
            border-left: solid 1px rgba(202, 202, 202, 0.5);
            display: flex;
            justify-content: space-between;
          `}
        >
          <div>
            <p className="title">Your shopping list</p>
            <p>Proceed to checkout..</p>
          </div>
          <button
            type="button"
            css={css`
              background-color: #4dc498;
              padding: 15px 44px;
              border-radius: 4px;
              color: #fff;
              text-transform: uppercase;
              font-family: 'ProximaNova-semibold';
              font-size: 15px;
              border: solid 1px #4dc498;

              &:hover {
                background-color: #fff;
                color: #4dc498;
              }
              &:focus {
                outline: none;
                box-shadow: 2px 4px 5px #4a4848;
              }
            `}
            onClick={() => {
              clearProduct();
            }}
          >
            Clear
          </button>
        </div>
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
)(Header);

Header.propTypes = {
  children: PropTypes.array,
};
