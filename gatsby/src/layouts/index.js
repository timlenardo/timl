import AdSense from 'react-adsense';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Nav from '../components/nav';
import Footer from '../components/footer';


import Favicon57 from '../img/favicon/apple-icon-57x57.png';
import Favicon60 from '../img/favicon/apple-icon-60x60.png';
import Favicon72 from '../img/favicon/apple-icon-72x72.png';
import Favicon76 from '../img/favicon/apple-icon-76x76.png';
import Favicon114 from '../img/favicon/apple-icon-114x114.png';
import Favicon120 from '../img/favicon/apple-icon-120x120.png';
import Favicon144 from '../img/favicon/apple-icon-144x144.png';
import Favicon152 from '../img/favicon/apple-icon-152x152.png';
import Favicon180 from '../img/favicon/apple-icon-180x180.png';
import Favicon192 from '../img/favicon/android-icon-192x192.png';
import Favicon32 from '../img/favicon/favicon-32x32.png';
import Favicon96 from '../img/favicon/favicon-96x96.png';
import Favicon16 from '../img/favicon/favicon-16x16.png';

import '../../sass/style.scss';

class TemplateWrapper extends React.Component {
  state = {
    navopen: false,
    users: [],
  };

  componentDidMount() {
    // // Adsense stuff
    // (adsbygoogle = window.adsbygoogle || []).push({
    //       google_ad_client: "ca-pub-3757931526099106",
    //       enable_page_level_ads: true
    //  });
  }

  handleToggle = () => {
    if (document && document.body && document.body.clientWidth >= 992) {
      return;
    }
    this.setState(state => ({navopen: !state.navopen }))
  }

  render() {
    return (
      <div key="template-wrapper" className={this.state.navopen ? 'nav-open' : ''}>
        <Helmet>
          <title>Tim L</title>
          <link rel="apple-touch-icon" sizes="57x57" href={Favicon57}/>
          <link rel="apple-touch-icon" sizes="60x60" href={Favicon60}/>
          <link rel="apple-touch-icon" sizes="72x72" href={Favicon72}/>
          <link rel="apple-touch-icon" sizes="76x76" href={Favicon76}/>
          <link rel="apple-touch-icon" sizes="114x114" href={Favicon114}/>
          <link rel="apple-touch-icon" sizes="120x120" href={Favicon120}/>
          <link rel="apple-touch-icon" sizes="144x144" href={Favicon144}/>
          <link rel="apple-touch-icon" sizes="152x152" href={Favicon152}/>
          <link rel="apple-touch-icon" sizes="180x180" href={Favicon180}/>
          <link rel="icon" type="image/png" sizes="192x192"  href={Favicon192}/>
          <link rel="icon" type="image/png" sizes="32x32" href={Favicon32}/>
          <link rel="icon" type="image/png" sizes="96x96" href={Favicon96}/>
          <link rel="icon" type="image/png" sizes="16x16" href={Favicon16}/>
          <link rel="manifest" href="favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content={Favicon144}/>
          <meta name="theme-color" content="#ffffff"/>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
          {/*<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>*/}
        </Helmet>
        <div className="row no-gutters pre-footer">
          <Nav
            location={this.props.location}
            onToggle={this.handleToggle}
            open={this.state.navopen}
          />
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
          <main className={this.state.navopen ? 'd-none' : 'd-block'}>{this.props.children()}</main>
        </div>
        <Footer className={this.state.navopen ? 'd-none' : 'd-block'} />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query allInstallQuery {
    allInstalls {
      edges {
          node {
              installs
              installs_5_min
          }
      }
    }
  }  
`;