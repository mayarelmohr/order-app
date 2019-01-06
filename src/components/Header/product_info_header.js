/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearProduct } from '../../actions';
import { Link } from '../../assets';
import style from './style';

class ProductInfoHeader extends React.Component {
  render() {
    const { title, items, isFetching } = this.props.products;

    return (
      <div css={style.sectionStyle}>
        {!isFetching && (
          <div>
            <p className="title">{title}</p>
            <p>
              {items.length} <span>{title.toLowerCase()}</span> products
              available
            </p>
          </div>
        )}
        <Link css={css``} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { products } = state;
  return { products };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfoHeader);

ProductInfoHeader.propTypes = {
  children: PropTypes.array,
};
