/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const CurrentProgress = ({ currentNum }) => (
  <div className="current-progress">
    <div className="progress">
      <h3 className="h3-title">CURRENT PAGE</h3>

      <h4 className="current-page">
        Page N°
        {` ${currentNum}`}
      </h4>
    </div>
    <button>UPDATE PROGRESS</button>
  </div>
);

CurrentProgress.propTypes = {
  currentNum: PropTypes.number.isRequired,
};

export default CurrentProgress;
