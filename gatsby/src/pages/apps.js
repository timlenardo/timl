// Apps Page
import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/hero';

// AppCards
import AppCard from '../components/appcard';
import Vivify from '../img/thumbnails/Vivify.png';
import VivifyIcon from '../components/icon/Vivify.icon';
import VivifyCover from '../img/covers/swing.png';
import VivifyGif from '../img/gifs/swing.gif';
import ThePlug from '../img/thumbnails/ThePlug.png';
import ThePlugIcon from '../components/icon/ThePlug.icon';
import ThePlugCover from '../img/covers/plug.png';
import ThePlugGif from '../img/gifs/plug.gif';
import JetFuel from '../img/thumbnails/JetFuel.png';
import JetFuelIcon from '../components/icon/JetFuel.icon';
import JetFuelCover from '../img/covers/jetfuel.png';
import JetFuelGif from '../img/gifs/jetfuel.gif';
import Kthx from '../img/thumbnails/Kthx.png';
import KthxIcon from '../components/icon/Kthx.icon';
import KthxCover from '../img/covers/kthx.png';
import KthxGif from '../img/gifs/kthx.gif'
import CaptionPro from '../img/thumbnails/CaptionPro.png';
import CaptionProIcon from '../components/icon/CaptionPro.icon';
import CaptionProCover from '../img/covers/cappro.png';
import CaptionProGif from '../img/gifs/cappro.gif';
import Devilish from '../img/thumbnails/Devilish.png';
import DevilishIcon from '../components/icon/Devilish.icon';
import DevilishCover from '../img/covers/devilish.png';
import Mango from '../img/thumbnails/Mango.png';
import MangoIcon from '../components/icon/Mango.icon';
import MangoCover from '../img/covers/mango.png';
import MangoGif from '../img/gifs/mango.gif';
import Snapball from '../img/thumbnails/Snapball.png';
import SnapballIcon from '../components/icon/Snapball.icon';
import SnapballCover from '../img/covers/snapball.png';
import SnapballGif from '../img/gifs/snapball.gif';
import ChattyAf from '../img/thumbnails/ChattyAf.png';
import ChattyAfIcon from '../components/icon/ChattyAf.icon';
import ChattyCover from '../img/covers/chatty.png';
import ChattyGif from '../img/gifs/chatty.gif';
import ColorMeme from '../img/thumbnails/ColorMeme.png';
import ColorMemeCover from '../img/covers/colormeme.png';
import ColorMemeGif from '../img/gifs/colormeme.gif';
import ColorMemeIcon from '../components/icon/ColorMeme.icon';
import BallGates from '../img/thumbnails/BallGates.png';
import BallGatesCover from '../img/covers/ballgates.png';
import BallGatesGif from '../img/gifs/ballgates.gif';
import BallGatesIcon from '../components/icon/BallGates.icon';
import BombDodger from '../img/thumbnails/BombDodger.png';
import BombDodgerIcon from '../components/icon/BombDodger.icon';
import BombDodgerCover from '../img/covers/bombdodger.png';
import BombDodgerGif from '../img/gifs/bombdodger.gif';
import BallzDrop from '../img/thumbnails/BallzDrop.png';
import BallzDropIcon from '../components/icon/BallzDrop.icon';
import BallzDropCover from '../img/covers/ballzdrop.png';
import BallzDropGif from '../img/gifs/ballzdrop.gif';
import Spiral3D from '../img/thumbnails/Spiral3D.png';
import Spiral3DIcon from '../components/icon/Spiral3D.icon';
import Spiral3DCover from '../img/covers/spiral3d.png';
import Spiral3DGif from '../img/gifs/spiral3d.gif';
import Boomerang from '../img/thumbnails/Boomerang.png';
import BoomerangIcon from '../components/icon/Boomerang.icon';
import BoomerangCover from '../img/covers/boomerang.png';
import BoomerangGif from '../img/gifs/boomerang.gif';
import Filter from '../img/thumbnails/Filters.png';
import FilterCover from '../img/covers/filters.png';
import FilterGif from '../img/gifs/filters.gif';
import FadeAndColor from '../img/thumbnails/FadeAndColor.png';
import FadeAndColorCover from '../img/covers/fade.png';
import FadeAndColorGif from '../img/gifs/fade.gif';
import InstagramIcon from '../components/icon/Instagram.icon';

class AppsPage extends React.Component {
  // Unfortunately necessary due to rendering being lazy with AppCards
  scrollinate() {
    setTimeout(() => {
      try {
        const el = window.document.querySelector(this.props.location.hash);
        if (el) {
          console.log(el);
          const y = el.getBoundingClientRect().top + window.pageYOffset;
          window.scroll({ top: y - 40, left: 0, behavior: 'smooth' });
        }
      } catch (_) {}
    }, 100);
  }
  componentDidMount() {
    this.scrollinate();
  }
  componentDidUpdate() {
    this.scrollinate();
  }
  render() {
    return (
      <div class="content">
        <h2 id="RealLabs">Real Labs</h2>
        <p>
          Since early 2017 we’ve been exploring and launching a variety of social and utility apps.
        </p>
        <div className="appcards">
          <AppCard
            id="Jetfuel"
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
            id="ThePlug"
            image={ThePlug}
            icon={ThePlugIcon}
            cover={ThePlugCover}
            gif={ThePlugGif}
            redirectUrl={"https://itunes.apple.com/us/app/the-plug-analytics/id1359311600?ls=1&mt=8"}
            title="The Plug"
            subtitle="Monetize your following"
            isPhone={true}
          />
          <AppCard
            id="Vivify"
            image={Vivify}
            icon={VivifyIcon}
            cover={VivifyCover}
            gif={VivifyGif}
            redirectUrl={"http://www.vivify.me"}
            title="Vivify"
            subtitle="Bring life to your photos"
            isPhone={true}
          />
          <AppCard
            id="kthx"
            image={Kthx}
            icon={KthxIcon}
            cover={KthxCover}
            gif={KthxGif}
            title="Kthx"
            subtitle="Get all the photos of you"
            isPhone={true}
          />
          <AppCard
            id="CaptionPro"
            image={CaptionPro}
            icon={CaptionProIcon}
            cover={CaptionProCover}
            gif={CaptionProGif}
            redirectUrl={"https://itunes.apple.com/app/id1332954872"}
            title="Caption Pro"
            subtitle="Step up your caption game"
            isPhone={true}
          />
          <AppCard
            id="Devilish"
            image={Devilish}
            icon={DevilishIcon}
            cover={DevilishCover}
            gif={DevilishCover}
            title="Devilish"
            subtitle="Anonymously chat"
            isPhone={true}
          />
          <AppCard
            id="Mango"
            image={Mango}
            icon={MangoIcon}
            cover={MangoCover}
            gif={MangoGif}
            title="Mango"
            subtitle="Juicy anonymous polls"
            isPhone={true}
          />
          <AppCard
            id="Snapball"
            image={Snapball}
            icon={SnapballIcon}
            cover={SnapballCover}
            gif={SnapballGif}
            title="Snapball"
            subtitle="Challenge friends on Snap"
            isPhone={true}
          />
          <AppCard
            id="ChattyAf"
            image={ChattyAf}
            icon={ChattyAfIcon}
            cover={ChattyCover}
            gif={ChattyGif}
            title="Chatty.af"
            subtitle="Comments for Snap"
            isPhone={true}
          />
        </div>
        <h2 id="JetFuelGames">JetFuel Games</h2>
        <p>
          After launching our app promotion service, JetFuel, we developed a series of casual games to bootstrap the inventory of apps.
        </p>
        <div className="appcards">
          <AppCard
              id="ColorMeme"
              image={ColorMeme}
              icon={ColorMemeIcon}
              cover={ColorMemeCover}
              gif={ColorMemeGif}
              redirectUrl={"https://itunes.apple.com/app/id1416407100"}
              title="Color Meme"
              subtitle="Pixel color your favorite memes"
              isPhone={true}
          />
          <AppCard
              id="BallGates"
              image={BallGates}
              icon={BallGatesIcon}
              cover={BallGatesCover}
              gif={BallGatesGif}
              redirectUrl={"https://itunes.apple.com/app/id1384813516"}
              title="Ball Gates"
              subtitle="Like Bill Gates, but it's a game"
              isPhone={true}
          />
          <AppCard
              id="BombDodger"
              image={BombDodger}
              icon={BombDodgerIcon}
              cover={BombDodgerCover}
              gif={BombDodgerGif}
              redirectUrl={"https://itunes.apple.com/app/id1375899524"}
              title="BombDodger"
              subtitle="How long can you survive?"
              isPhone={true}
          />
          <AppCard
              id="BallzDrop"
              image={BallzDrop}
              icon={BallzDropIcon}
              gif={BallzDropGif}
              cover={BallzDropCover}
              redirectUrl={"https://itunes.apple.com/app/id1406698412"}
              title="Ballz Drop"
              subtitle="How many layers can you pass?"
              isPhone={true}
          />
          <AppCard
              id="Spiral3D"
              image={Spiral3D}
              icon={Spiral3DIcon}
              gif={Spiral3DGif}
              cover={Spiral3DCover}
              redirectUrl={"https://play.google.com/store/apps/details?id=com.naokikomoto.spiral"}
              title="Spiral 3D"
              subtitle="How many layers can you pass?"
              isPhone={true}
          />
        </div>
        <h2 id="Instagram">Instagram</h2>
        <p>
          I had a chance to build some really cool things during my time at Instagram. Here's
          a few highlights.
        </p>
        <div className="appcards">
          <AppCard
            id="Boomerang"
            image={Boomerang}
            icon={BoomerangIcon}
            gif={BoomerangGif}
            cover={BoomerangCover}
            redirectUrl={"https://itunes.apple.com/us/app/boomerang-from-instagram/id1041596399?mt=8"}
            title="Boomerang"
            subtitle="Fun looping videos"
            isPhone={true}
          />
          <AppCard
            id="Filters"
            image={Filter}
            icon={InstagramIcon}
            gif={FilterGif}
            cover={FilterCover}
            redirectUrl={"https://www.instagram.com/p/1_SgtKjZBJ/"}
            title="Filters, Clarendon to Perpetua"
            subtitle="Instagram's 11 most recent filters"
            isPhone={true}
          />
          <AppCard
            id="FadeAndColor"
            image={FadeAndColor}
            icon={InstagramIcon}
            gif={FadeAndColorGif}
            cover={FadeAndColorCover}
            redirectUrl={"https://www.facebook.com/502917359/posts/10153233804082360/?__tn__=-R"}
            title="Fade & Color"
            subtitle="Pro adjustment tools"
            isPhone={true}
          />
        </div>
      </div>
    );
  }
}

export default AppsPage;
