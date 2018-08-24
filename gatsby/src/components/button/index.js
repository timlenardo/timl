import React from 'react';

import './_button.scss';

const Button = props => (
  <button {...props} type="button" className={`Button ${props.className || ''}`}>
    {props.children}
  </button>
);

export default Button;
