import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Loading,
  ProductsWrapper,
  CartWrapper,
} from '../components';
import { fetchProducts } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { title, items, isFetching } = this.props.products;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <Container>
        <Header>
          <p className="title">{title}</p>
          <p>
            {items.length} <span>{title.toLowerCase()}</span> products available
          </p>
        </Header>
        <div
          css={css`
            display: flex;
            section {
              flex-basis: 50%;
            }
          `}
        >
          <section>
            <ProductsWrapper products={this.props.products} />
          </section>
          <section>
            <CartWrapper />
          </section>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { products } = state;
  return { products };
}
const mapDispatchToProps = {
  fetchProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  fetchProducts: PropTypes.func,
  products: PropTypes,
};
