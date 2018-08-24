import React from 'react';
import './_icon.scss';

const Icon = props => {
  return (
    <svg viewBox={props.icon.viewBox} {...props}>
      <g>
        <use xlinkHref={`#${props.icon.id}`} />
        <rect className="icon-surface" x="0" y="0" width={props.width} height={props.height} />
      </g>
    </svg>
  );
};

export default Icon;
