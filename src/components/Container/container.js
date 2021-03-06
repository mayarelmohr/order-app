/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

/**
 * A generic component used as layout container
 */
const Container = ({ children }) => (
  <div
    css={css`
      max-width: 2000px;
      margin: 0 auto;
    `}
  >
    {children}
  </div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
