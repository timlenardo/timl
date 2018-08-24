import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Nav from '../components/nav';
import Footer from '../components/footer';

import axios from 'axios'

import '../../sass/style.scss';

class TemplateWrapper extends React.Component {
  state = {
    navopen: false,
    users: [],
  };

  componentDidMount() {
    // var itc = require('itunesconnectanalytics');
    // var Itunes = itc.Itunes;
    // var AnalyticsQuery = itc.AnalyticsQuery;
    //
    // var username = 'UNAME';
    // var password = 'PASS';
    // var appId = '12345'; //Found in My Apps -> App -> Apple ID or read below on getting the app id.
    //
    // var instance = new Itunes(username, password, {
    //     errorCallback: function(e) {
    //         console.log('Error logging in: ' + e);
    //     },
    //     successCallback: function(d) {
    //         console.log('Logged in');
    //     }
    // });
    //
    // instance.getApps(function(error, data) {
    //     console.log(JSON.stringify(data, null, 2));
    // });
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
          <title>Tim Lenardo</title>
          <link rel="apple-touch-icon" sizes="57x57" href="../img/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="../img/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="../img/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="../img/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="../img/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="../img/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="../img/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="../img/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="../img/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="../img/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="../img/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="../img/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="../img/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
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