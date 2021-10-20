import React from 'react';

import Icon from '../icon';
import Email from '../email';
import './_footer.scss';

const twitterUser = 'telenardo';
const instagramUser = 'tim.lenardo';

const Footer = ({ className }) => (
  <footer className={'footer mx-auto ' + className}>
    <div className="container-fluid">
      <div className="row no-gutters">
        <h2>Follow</h2>
      </div>
      <div className="row no-gutters">
        <div className="col-12 col-lg-6">
          <p>
            Want to stay up to date?
            <br />
            Subscribe to my monthly newsletter:
          </p>
        </div>
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <Email onSubmit={email => console.log(email)} />
        </div>
        <div className="col-12">
          <p>
            You can also find me on&nbsp;
            <a href={`https://www.twitter.com/${twitterUser}`}>Twitter</a>
            &nbsp;or&nbsp;
            <a href={`https://www.instagram.com/${instagramUser}`}>Instagram</a> ✌
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
