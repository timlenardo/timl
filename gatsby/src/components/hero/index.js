// Hi, I'm Tim
import React from 'react';

import './_hero.scss';
import timgeneral from '../../img/tim_general.png';

const Hero = () => (
  <div className="Hero row no-gutters align-items-stretch">
    <div className="col-12 col-lg-auto d-flex align-items-center justify-content-center">
      <img src={timgeneral} />
    </div>
    <div className="col-10 col-lg-auto ml-3 my-3 ml-lg-4 my-lg-3">
      <p>Hi, my name's</p>
      <h1>
        Tim L.
      </h1>
    </div>
  </div>
);

export default Hero;
