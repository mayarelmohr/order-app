/** @jsx jsx */
import { PureComponent } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRouter, setFilter } from '../../actions';
import style from './style';

class Filter extends PureComponent {
  render() {
    const {
      content,
      value,
      isRouter,
      setRouter,
      setFilter,
      currentRouter,
      currentFilter,
    } = this.props;
    const checked = (isRouter && currentRouter === value) || (!isRouter && currentFilter === value);
    return (
      <button
        type="button"
        css={css`
          ${style.buttonStyle}
          ${checked ? style.checkedStyle : ''}
        `}
        onClick={() => {
          isRouter ? setRouter(value) : setFilter(value);
        }}
      >
        {content}
      </button>
    );
  }
}

const mapStateToProps = state => {
  const { currentRouter, currentFilter } = state;
  return {
    currentRouter,
    currentFilter,
  };
};
const mapDispatchToProps = {
  setRouter,
  setFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

Filter.defaultProps = {
  content: PropTypes.string,
  currentFilter: PropTypes.string,
  currentRouter: PropTypes.string,
  setFilter: PropTypes.func,
  setRouter: PropTypes.func,
  value: PropTypes.string,
  isRouter: PropTypes.bool,
};

Filter.propTypes = {
  content: PropTypes.string,
  currentFilter: PropTypes.string,
  currentRouter: PropTypes.string,
  setFilter: PropTypes.func,
  setRouter: PropTypes.func,
  value: PropTypes.string,
  isRouter: PropTypes.bool,
};
