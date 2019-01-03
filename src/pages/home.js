import React from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Loading, CategoriesWrapper } from '../components';
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
        <section>
          <Header>
            <h1>{title}</h1>
            <p>{`${items.length} ${title} products available`}</p>
          </Header>
          <CategoriesWrapper products={this.props.products} />
        </section>
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
