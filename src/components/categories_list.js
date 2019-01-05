/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import colors from '../utils/themes';
import { CategoriesListItem } from './index';

class CategoriesList extends React.Component {
  render() {
    const { list, name } = this.props;
    return (
      <div
        css={css`
          background-color: #fff;
          padding: 20px;
          margin-top: 20px;
          box-shadow: 0px 2px 5px 0px #e8e8ef;
        `}
      >
        <p className="subtitle">{name}</p>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <CategoriesListItem content={item} clusterName={name} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;

CategoriesList.propTypes = {
  currentProducts: PropTypes.array,
};
