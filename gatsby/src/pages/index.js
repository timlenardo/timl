// About Page
import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/hero';

// AppCards
import AppCard from '../components/appcard';
import ThePlug from '../img/thumbnails/ThePlug.png';
import ThePlugIcon from '../components/icon/ThePlug.icon';
import ThePlugCover from '../img/covers/plug.png';
import ThePlugGif from '../img/gifs/plug.gif';
import JetFuel from '../img/thumbnails/JetFuel.png';
import JetFuelIcon from '../components/icon/JetFuel.icon';
import JetFuelCover from '../img/covers/jetfuel.png';
import JetFuelGif from '../img/gifs/jetfuel.gif';

const downloadTimes = 1820934;

class IndexPage extends React.Component {
    state = {
        jetfuel_count: 2492704,
        total_count: 125069207,
    }

    componentDidMount() {
        fetch('/total_install_rate')
            .then(response => response.json())
            .then(function(response) {
                let total_count = response['num_installs'];
                let rate = parseInt(response['rate']);
                console.log("Total Count: " + total_count);
                console.log("Total Rate: " + rate);
                this.setState({total_count: total_count});
                setInterval(
                    function() {
                        console.log('total interval');
                        let total_count = parseInt(this.state.total_count);
                        total_count = total_count + 1;
                        this.setState({total_count: total_count});
                    }.bind(this),
                    rate
                );
            }.bind(this));

        fetch('/jetfuel_install_rate')
            .then(response => response.json())
            .then(function(response) {
                let jetfuel_count = response['num_installs'];
                let rate = parseInt(response['rate']);
                console.log("Jetfuel Count: " + jetfuel_count);
                console.log("Total Rate: " + rate);
                this.setState({jetfuel_count: jetfuel_count});
                setInterval(
                    function() {
                        console.log('jetfuel interval');
                        let jetfuel_count = parseInt(this.state.jetfuel_count);
                        jetfuel_count = jetfuel_count + 1;
                        this.setState({jetfuel_count: jetfuel_count});
                    }.bind(this),
                    rate
                );
            }.bind(this));
    }

    render() {
        return (
            <div>
                <Hero/>

                <h2>About</h2>
                <p>
                    I <Link to="/apps">make apps</Link>, and occasionally{' '}
                    <Link to="/writing">write about it</Link>.
                </p>

                <p>
                    At the moment, my apps have been downloaded <Link id="total_install_count"
                                                                      to="/apps">{this.state.total_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Link> times.
                </p>

                <p>
                    I began my career at Instagram building things like{' '}
                    <Link to="/apps#Boomerang">Boomerang</Link>, <Link to="/apps#FadeAndColor">Fade & Color</Link>
                    , and the <Link to="/apps#Filters">11 most recent filters</Link>.
                </p>

                <p>
                    In 2016, I left Instagram and started a company called{' '}
                    Real Labs with a co-founder, JJ Maxwell. We raised a $1.7M
                    seed round from some of Silicon Valley’s <a href="https://angel.co/real-labs-1#past_financing">top
                    investors</a>, and
                    set off to build the next big app.
                </p>

                <p>
                    Want to get in touch? I'm on <a href="https://twitter.com/telenardo">Twitter</a> and <a
                    href="https://www.instagram.com/tim.lenardo/">Instagram</a>. Carpe DM.
                </p>

                <h2>Latest</h2>
                <p>
                    A few months ago we started <a href="https://www.jetfuel.it">JetFuel</a>, an influencer driven app
                    promotion service. To date,
                    we’ve delivered <Link id="jetfuel_install_count" to="/">{this.state.jetfuel_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Link> installs to some of the top
                    companies in mobile!
                    {/*, like <a href="http://www.calm.com">Calm</a>, <a href="http://www.mammoth.la">Mammoth</a>,*/}
                    {/*and <a href="http://www.anchorfree.com">AnchorFree</a>.*/}
                </p>

                {/*<h2>More Works</h2>*/}

                <div className="appcards">
                    <AppCard
                        image={JetFuel}
                        icon={JetFuelIcon}
                        cover={JetFuelCover}
                        gif={JetFuelGif}
                        redirectUrl={"https://www.jetfuel.it"}
                        title="JetFuel.it"
                        subtitle="Blazing fast app installs"
                        isPhone={false}
                    />
                    <AppCard
                        image={ThePlug}
                        icon={ThePlugIcon}
                        cover={ThePlugCover}
                        // gif={ThePlugGif}
                        gif={ThePlugCover}
                        redirectUrl={"https://itunes.apple.com/us/app/the-plug-analytics/id1359311600?ls=1&mt=8"}
                        title="The Plug"
                        subtitle="Monetize your following"
                        isPhone={true}
                    />
                </div>

                <p>
                    <Link to="/apps">View All Work</Link>
                </p>
            </div>
        );
    }
}


export default IndexPage;

export const query = graphql`
  query allInstallQueryIndex {
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