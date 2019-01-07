/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import CategoriesListItem from './categories_list_item';
import style from './style';

/**
 * List for filtered products clustered by the cluster attribute
 */

const CategoriesList = props => {
  const { list, name } = props;
  return (
    <div
      css={css`
        ${style.wrapperStyle}
      `}
    >
      <p className="subtitle">{name}</p>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <CategoriesListItem content={item} clusterName={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;

CategoriesList.defaultProps = {
  list: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
};

CategoriesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
};
