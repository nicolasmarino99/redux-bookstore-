import React from 'react';
import PropTypes from 'prop-types';

const ProgressCircle = ({ numbers, strokeWidth }) => {
  const percentage = Math.floor((numbers[0] / numbers[1]) * 100);
  const radius = (50 - strokeWidth / 2);
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: '#007dbc',
    strokeLinecap: 'round',
    strokeDasharray: `${diameter}px ${diameter}px`,
    // eslint-disable-next-line no-mixed-operators
    strokeDashoffset: `${((100 - percentage) / 100 * diameter)}px`,
  };

  return (
    <div className="ProgressCircle">

      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        width={70}
        height={80}
      >
        <path
          className="CircularProgressbar-trail"
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={{
            stroke: '#d6d6d6',
          }}
        />
        <path
          className="CircularProgressbar-path"
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={progressStyle}
        />
      </svg>

      <div className="percentage">
        <h2>{`${percentage}%`}</h2>
        <p>Completed</p>
      </div>

    </div>
  );
};

ProgressCircle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  numbers: PropTypes.array.isRequired,
  strokeWidth: PropTypes.number.isRequired,
};

export default ProgressCircle;
