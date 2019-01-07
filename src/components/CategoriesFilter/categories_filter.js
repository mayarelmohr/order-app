/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { FilterButton } from '..';
import styles from './style';

/**
 * List of Filter buttons either Router or Filters in addition to
 * button that selects all kinds
 */

const CategoriesFilter = props => {
  const { list, children, style, isRouter } = props;
  return (
    <div css={[styles.wrapperStyle, style]}>
      {children}
      <ul css={styles.listStyle}>
        <li>
          <FilterButton content="All" value="" isRouter={isRouter} />
        </li>
        {list.map(item => (
          <li key={item}>
            <FilterButton content={item} value={item} isRouter={isRouter} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesFilter;

CategoriesFilter.defaultProps = {
  isRouter: PropTypes.bool,
  children: PropTypes.node,
  list: PropTypes.arrayOf(PropTypes.string),
};
CategoriesFilter.propTypes = {
  isRouter: PropTypes.bool,
  children: PropTypes.node,
  list: PropTypes.arrayOf(PropTypes.string),
};
