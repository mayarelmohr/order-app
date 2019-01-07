/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Container, Header, ProductsWrapper, CartWrapper } from '../components';

/**
 * The home page that wraps all components
 */
const Home = () => (
  <Container>
    <Header />
    <div
      css={css`
        section {
          width: 50%;
          postition: relative;
        }
      `}
    >
      <section>
        <ProductsWrapper />
      </section>
      <section>
        <CartWrapper />
      </section>
    </div>
  </Container>
);

export default Home;
