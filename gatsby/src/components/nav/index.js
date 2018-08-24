import React from 'react';
import GatsbyLink from 'gatsby-link';

import './_nav.scss';

import TL from './TL.icon';
import MenuIcon from './menu.icon';
import CloseIcon from './close.icon';
import Icon from '../icon';

const Nav = ({ onToggle, open }) => {
  const Link = props => <GatsbyLink {...props} onClick={onToggle} />;
  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="nav-chop">
          {/* Large display */}
          <Icon icon={TL} width={39} height={29} className="d-none d-lg-block" />
          {/* Mobile display */}
          <Icon icon={TL} width={28} height={22} className="d-block d-lg-none" />
        </div>
        <a onClick={onToggle}>
          {open ? (
            <Icon icon={CloseIcon} width={28} height={22} className="d-block d-lg-none" />
          ) : (
            <Icon icon={MenuIcon} width={26} height={12} className="d-block d-lg-none" />
          )}
        </a>
      </div>
      <div className="nav-links">
        <Link activeClassName="active" to="/" exact>
          About
        </Link>
        <Link activeClassName="active" to="/apps/">
          Apps
        </Link>
        <Link activeClassName="active" to="/writing/">
          Writing
        </Link>
        <Link activeClassName="active" to="/speaking/">
          Speaking
        </Link>
        <Link activeClassName="active" to="/contact/">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
