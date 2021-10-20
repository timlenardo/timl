// Apps Page
import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/hero';

// AppCards
import AppCard from '../components/appcard';
import CaseCard from '../components/casecard';

// JetFuel Case studies
import FitnessCover from '../img/covers/fitness.png';
import FitnessCoverHover from '../img/covers/fitnessHover.png';
import CalmCover from '../img/covers/calm.png';
import CalmCoverHover from '../img/covers/calmHover.png';
import NanobitCover from '../img/covers/nanobit.png';
import NanobitCoverHover from '../img/covers/nanobitHover.png';
import GoatCover from '../img/covers/goat.png';
import GoatCoverHover from '../img/covers/goatHover.png';

// Takeoff Labs
import Fontmaker from '../img/thumbnails/Fontmaker.png';
import FontmakerIcon from '../img/icons/fontmaker2.png';
import FontmakerCover from '../img/covers/fontmaker.png';
import FontmakerBanner from '../img/banners/fontmaker.png';
let FontmakerGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/fontmaker.gif?alt=media&token=e04aa7eb-7e3e-49a9-89eb-3e623067f2bf';

import Copypaste from '../img/thumbnails/Copypaste.png';
import CopypasteIcon from '../img/icons/copypaste2.png';
import CopypasteCover from '../img/covers/copypaste.png';
import CopypasteBanner from '../img/banners/fontkey2.png';
let CopypasteGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/copypaste.gif?alt=media&token=601d7b11-fdeb-4240-8424-8beeb196a604';

import Vibe from '../img/thumbnails/Vibe.png';
import VibeIcon from '../img/icons/vibe2.png';
import VibeCover from '../img/covers/vibe.png';
import VibeBanner from '../img/banners/vibe2.png';
let VibeGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/vibe.gif?alt=media&token=f8d9785f-4571-4735-95ba-caa8be547e2d';

import Litstick from '../img/thumbnails/Litstick.png';
import LitstickIcon from '../img/icons/litstick2.png';
import LitstickCover from '../img/covers/litstick.png';
import LitstickBanner from '../img/banners/litstick3.png';
let LitstickGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/litstick.gif?alt=media&token=f38b4d86-b182-4228-b550-998f19a3137e';

import Fontkey from '../img/thumbnails/FontKey.png';
import FontkeyIcon from '../img/icons/fontkey2.png';
import FontkeyCover from '../img/covers/fontkey.png';
import FontkeyBanner from '../img/banners/fontkey2.png';
let FontkeyGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/fontkey3.gif?alt=media&token=3dcfb39a-3f44-409b-9f63-203680574224';

import Celebs from '../img/thumbnails/Celebs.png';
import CelebsIcon from '../img/icons/celebs2.png';
import CelebsCover from '../img/covers/celebs.png';
import CelebsBanner from '../img/banners/celebs.png';
let CelebsGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/celebs.gif?alt=media&token=04f66dce-b30c-4a29-baee-eea371cdef89';

// Refined Media
import Spooky from '../img/thumbnails/spookyCover.png';
import SpookyIcon from '../img/icons/spookypost.svg';
import SpookyCover from '../img/covers/spooky.png';
let SpookyGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/spooky.gif?alt=media&token=e5cb07d7-57cb-45ce-aced-de68c2907236';

import Relate from '../img/thumbnails/relateCover.png';
import RelateIcon from '../img/icons/relate.svg';
import RelateCover from '../img/covers/relate.png';
let RelateGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/relate.gif?alt=media&token=34130984-80e1-4aa8-b91a-310067813dc4';

import Camm from '../img/thumbnails/cammCover.png';
import CammIcon from '../img/icons/camm.svg';
import CammCover from '../img/covers/camm.png';
let CammGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/camm.gif?alt=media&token=4f89bf54-84c7-4e78-b254-4b2348c82785';

import Satiating from '../img/thumbnails/satiatingCover.png';
import SatiatingIcon from '../img/icons/satiating.svg';
import SatiatingCover from '../img/covers/satiating.png';
let SatiatingGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/satiating.gif?alt=media&token=645a2bc3-78ea-41e6-893f-db60f39c8682';

import Jessie from '../img/thumbnails/jessieCover.png';
import JessieIcon from '../img/icons/jessie.svg';
import JessieCover from '../img/covers/jessie.png';
let JessieGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/jessie.gif?alt=media&token=a7ce0d18-6783-49b2-ac85-864bdd2a0aff';

import Physics from '../img/thumbnails/physicsCover.png';
import PhysicsIcon from '../img/icons/physics.svg';
import PhysicsCover from '../img/covers/physics.png';
let PhysicsGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/physics.gif?alt=media&token=6b631420-4ba8-44fa-aa3a-3bcdb2954a67';

// Real Labs
import Vivify from '../img/thumbnails/Vivify.png';
import VivifyIcon from '../components/icon/Vivify.icon';
import VivifyCover from '../img/covers/swing.png';
let VivifyGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/swing.gif?alt=media&token=6b237eb2-cff4-4bef-8a46-a7117abddcd6';

import ThePlug from '../img/thumbnails/ThePlug.png';
import ThePlugIcon from '../components/icon/ThePlug.icon';
import ThePlugCover from '../img/covers/plug.png';
let ThePlugGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/plug.gif?alt=media&token=46a8624f-7b04-4cf1-82a0-a128fb6297ad';

import JetFuel from '../img/thumbnails/JetFuel.png';
import JetFuelIcon from '../components/icon/JetFuel.icon';
import JetFuelCover from '../img/covers/jetfuel.png';
let JetFuelGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/jetfuel.gif?alt=media&token=f4fcc545-0ed5-436e-9b82-71ebe07bcb2b';

import Kthx from '../img/thumbnails/Kthx.png';
import KthxIcon from '../components/icon/Kthx.icon';
import KthxCover from '../img/covers/kthx.png';
let KthxGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/kthx2.gif?alt=media&token=8b4336f1-1c3b-4954-a0d1-9a0a5e9a5716'

import CaptionPro from '../img/thumbnails/CaptionPro.png';
import CaptionProIcon from '../components/icon/CaptionPro.icon';
import CaptionProCover from '../img/covers/cappro.png';
let CaptionProGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/cappro.gif?alt=media&token=b92f5fb5-342a-47fb-8d95-cfe5a4ed2f2f';

import Devilish from '../img/thumbnails/Devilish.png';
import DevilishIcon from '../components/icon/Devilish.icon';
import DevilishCover from '../img/covers/devilish.png';

import Mango from '../img/thumbnails/Mango.png';
import MangoIcon from '../components/icon/Mango.icon';
import MangoCover from '../img/covers/mango.png';
let MangoGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/mango.gif?alt=media&token=d060b67a-582f-4e01-bc0e-455cbfb35753';

import Snapball from '../img/thumbnails/Snapball.png';
import SnapballIcon from '../components/icon/Snapball.icon';
import SnapballCover from '../img/covers/snapball.png';
let SnapballGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/snapball.gif?alt=media&token=78e93b5b-7120-4737-9173-8d830e426d15';

import ChattyAf from '../img/thumbnails/ChattyAf.png';
import ChattyAfIcon from '../components/icon/ChattyAf.icon';
import ChattyCover from '../img/covers/chatty.png';
let ChattyGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/chatty.gif?alt=media&token=f8d6bdde-d25d-4837-92cc-15d0a60fdf79';

import ColorMeme from '../img/thumbnails/ColorMeme.png';
import ColorMemeCover from '../img/covers/colormeme.png';
import ColorMemeIcon from '../components/icon/ColorMeme.icon';
let ColorMemeGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/colormeme.gif?alt=media&token=f0fa06f9-1572-4e12-8547-0e905822b2ae';

import BallGates from '../img/thumbnails/BallGates.png';
import BallGatesCover from '../img/covers/ballgates.png';
import BallGatesIcon from '../components/icon/BallGates.icon';
let BallGatesGif='https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/ballgates.gif?alt=media&token=b6bac731-98e2-4224-8ca3-1da96e306e10';

import BombDodger from '../img/thumbnails/BombDodger.png';
import BombDodgerIcon from '../components/icon/BombDodger.icon';
import BombDodgerCover from '../img/covers/bombdodger.png';
let BombDodgerGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/bombdodger.gif?alt=media&token=c1b29ceb-cbad-4eaf-815d-86a66e7c3ca2';

import BallzDrop from '../img/thumbnails/BallzDrop.png';
import BallzDropIcon from '../components/icon/BallzDrop.icon';
import BallzDropCover from '../img/covers/ballzdrop.png';
let BallzDropGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/ballzdrop.gif?alt=media&token=d7645adf-3fa5-42cb-ab05-9c7debafdcc8';

import Spiral3D from '../img/thumbnails/Spiral3D.png';
import Spiral3DIcon from '../components/icon/Spiral3D.icon';
import Spiral3DCover from '../img/covers/spiral3d.png';
// import Spiral3DGif from '../img/gifs/spiral3d.gif';

import Boomerang from '../img/thumbnails/Boomerang.png';
import BoomerangIcon from '../components/icon/Boomerang.icon';
import BoomerangCover from '../img/covers/boomerang.png';
let BoomerangGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/boomerang.gif?alt=media&token=89daa598-9cb9-40bc-a5fd-6300b7fee65e';

import Filter from '../img/thumbnails/Filters.png';
import FilterCover from '../img/covers/filters.png';
let FilterGif='https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/filters.gif?alt=media&token=2ebd6230-6137-4e1f-8944-7d162e13e51a';

import FadeAndColor from '../img/thumbnails/FadeAndColor.png';
import FadeAndColorCover from '../img/covers/fade.png';
let FadeAndColorGif = 'https://firebasestorage.googleapis.com/v0/b/timl-85b4a.appspot.com/o/fade.gif?alt=media&token=083dd3d3-2ce3-465d-bcd5-86a3678b8ba1';

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
        <h2 id="Jetfuel">JetFuel</h2>
        <p>
            In early 2018, <a href="https://www.linkedin.com/in/jj-maxwell-753b5026/">JJ Maxwell</a> and I launched <a href="www.jetfuel.it">JetFuel</a>, a service enables advertisers to run influencer marketing campaigns at scale. Since launching, we’ve delivered over tens of millions of installs for our partners and paid tens of millions to influencers. In July 2021, JetFuel was <a href="https://vungle.com/blog/vungle-acquires-jetfuel-entering-the-emerging-creator-economy/">acquired</a> by Blackstone-owned Vungle.
        </p>
        <div className="appcards">
            <CaseCard
                id="FitnessCoach"
                image={FitnessCover}
                imageHover={FitnessCoverHover}
                redirectUrl={"https://www.jetfuel.it/luni"}
                title="Fitness Coach"
                subtitle="JetFuel drives Fitness Coach to #1 in the App Store's Health & Fitness Category"
                isPhone={false}
            />
            <CaseCard
                id="Calm"
                image={CalmCover}
                imageHover={CalmCoverHover}
                redirectUrl={"https://www.jetfuel.it/calm"}
                title="Calm"
                subtitle="JetFuel increases Calm's influencer marketing ROI by over 50%"
                isPhone={false}
            />
            <CaseCard
                id="Nanobit"
                image={NanobitCover}
                imageHover={NanobitCoverHover}
                redirectUrl={"https://www.jetfuel.it/nanobit"}
                title="Nanobit"
                subtitle="JetFuel propels Nanobit's MyStory up the top charts, landing at #44 Top Free Game"
                isPhone={false}
            />
            <CaseCard
                id="Goat"
                image={GoatCover}
                imageHover={GoatCoverHover}
                redirectUrl={"https://www.jetfuel.it/goat"}
                title="Goat Games"
                subtitle="GOAT Games unlocks the iOS market with Jetfuel."
                isPhone={false}
            />
            <p>
                <a href="https://www.jetfuel.it/casestudy"> See More </a>
            </p>
        </div>


        <h2 id="Takeoff">Takeoff Labs</h2>
        <p>
            In 2019, I launched <a href="https://takeoff-labs.com/">Takeoff Labs</a> with <a href="https://www.linkedin.com/in/rhai/"> Rhai Goburdhun </a> and <a href="https://www.linkedin.com/in/jj-maxwell-753b5026/">JJ Maxwell</a>. Takeoff is an app studio focused on social consumer experiences that partners with JetFuel for marketing. Since launching, we’ve released numerous Top 100 apps, with 10s of millions of installs across our titles.
        </p>
        <div className="appcards">
          <AppCard
            id="FontMaker"
            image={Fontmaker}
            iconImg={FontmakerIcon}
            cover={FontmakerCover}
            gif={FontmakerGif}
            banner={FontmakerBanner}
            redirectUrl={"https://apps.apple.com/us/app/fontmaker-font-keyboard-app/id1573791613"}
            title="FontMaker"
            subtitle="Draw your own font"
            isPhone={true}
          />
            <AppCard
                id="LitStick"
                image={Litstick}
                iconImg={LitstickIcon}
                cover={LitstickCover}
                gif={LitstickGif}
                banner={LitstickBanner}
                redirectUrl={"https://apps.apple.com/us/app/litstick-best-stickers-app/id1472619338"}
                title="LitStick"
                subtitle="Best sticker app"
                isPhone={true}
            />
            <AppCard
                id="Celebs"
                image={Celebs}
                iconImg={CelebsIcon}
                cover={CelebsCover}
                gif={CelebsGif}
                banner={CelebsBanner}
                redirectUrl={"https://apps.apple.com/us/app/celebs-celebrity-look-alike/id1488127870"}
                title="Celebs"
                subtitle="Find your celebrity look-a-like"
                isPhone={true}
            />
            <AppCard
                id="Vibe"
                image={Vibe}
                iconImg={VibeIcon}
                cover={VibeCover}
                gif={VibeGif}
                banner={VibeBanner}
                redirectUrl={"https://apps.apple.com/us/app/vibe-make-new-friends/id1464078094"}
                title="Vibe"
                subtitle="Make new friends"
                isPhone={true}
            />
            <AppCard
            id="CopyPaste"
            image={Copypaste}
            iconImg={CopypasteIcon}
            cover={CopypasteCover}
            gif={CopypasteGif}
            banner={CopypasteBanner}
            redirectUrl={"https://apps.apple.com/us/app/copypaste-auto-keyboard/id1571506312"}
            title="CopyPaste"
            subtitle="Fast copy & paste keyboard"
            isPhone={true}
          />
          <AppCard
            id="FontKey"
            image={Fontkey}
            iconImg={FontkeyIcon}
            cover={FontkeyCover}
            gif={FontkeyGif}
            banner={FontkeyBanner}
            redirectUrl={"https://apps.apple.com/us/app/fontkey-fonts-keyboard-emoji/id1261719303"}
            title="FontKey"
            subtitle="Fun font keyboard"
            isPhone={true}
          />
            <p>
                <a href="https://apps.apple.com/us/developer/takeoff-labs-llc/id1512926926"> See More </a>
            </p>
        </div>
        <h2 id="Refined">Refined Media</h2>
          <p>
              Since mid-2020, JetFuel has been acquiring and building social media pages, which we spun off into a new division,  <a href="www.refinedmedia.io">Refined Media</a>. With <a href="https://www.linkedin.com/in/aidan-quest-107b57112/">Aidan Quest</a> at the helm, we own and operate 50+ social media pages across Snapchat, TikTok, and Intagram. We reach over 50M followers, producing well over 1B monthly impressions.
          </p>
          <div className="appcards">
              <AppCard
                  id="Spookypost"
                  image={Spooky}
                  iconImg={SpookyIcon}
                  cover={SpookyCover}
                  gif={SpookyGif}
                  redirectUrl={"https://www.tiktok.com/@spookypost?"}
                  title="@spookypost"
                  subtitle="1.3M on TikTok"
                  isPhone={true}
              />
              <AppCard
                  id="Relate"
                  image={Relate}
                  iconImg={RelateIcon}
                  cover={RelateCover}
                  gif={RelateGif}
                  redirectUrl={"https://www.instagram.com/@relate?"}
                  title="@relate"
                  subtitle="2.2M on Instagram"
                  isPhone={true}
              />
              <AppCard
                  id="Cam"
                  image={Camm}
                  iconImg={CammIcon}
                  cover={CammCover}
                  gif={CammGif}
                  redirectUrl={"https://www.tiktok.com/@cammsays?"}
                  title="@cammsays"
                  subtitle="980K on TikTok"
                  isPhone={true}
              />

              <AppCard
                  id="Satiating"
                  image={Satiating}
                  iconImg={SatiatingIcon}
                  cover={SatiatingCover}
                  gif={SatiatingGif}
                  redirectUrl={"https://www.snapchat.com/add/satiating"}
                  title="@relate"
                  subtitle="670K on Snapchat"
                  isPhone={true}
              />
              <AppCard
                  id="Physics"
                  image={Physics}
                  iconImg={PhysicsIcon}
                  cover={PhysicsCover}
                  gif={PhysicsGif}
                  redirectUrl={"https://www.instagram.com/@physics?"}
                  title="@physics"
                  subtitle="1.5M on Instagram"
                  isPhone={true}
              />
              <AppCard
                  id="Jessie"
                  image={Jessie}
                  iconImg={JessieIcon}
                  cover={JessieCover}
                  gif={JessieGif}
                  redirectUrl={"https://www.tiktok.com/@jessieguth?"}
                  title="@jessieguth"
                  subtitle="2.1M on TikTok"
                  isPhone={true}
              />
              <p>
                  <a href="https://www.refinedmedia.io/"> See More </a>
              </p>
          </div>


        <h2 id="RealLabs">Real Labs</h2>
        <p>
          Between 2016-2018, we’ve built a variety of experimental social and utility apps. Real Labs culimated in early 2018 after we launched JetFuel and the Plug, which became our full-time focus.
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
            gif={ThePlugCover}
            // gif={ThePlugGif}
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
        <h2 id="JetFuelGames">Games</h2>
        <p>
          In early 2018, we developed a series of casual games to help kickstart the demand for JetFuel. Using JetFuel, we were able to drive each of these games into the Top 100 Free Games charts. This got the attention of a lot of game companies, many of which subsequently became JetFuel customers!
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
          {/*<AppCard*/}
              {/*id="Spiral3D"*/}
              {/*image={Spiral3D}*/}
              {/*icon={Spiral3DIcon}*/}
              {/*gif={Spiral3DGif}*/}
              {/*cover={Spiral3DCover}*/}
              {/*redirectUrl={"https://play.google.com/store/apps/details?id=com.naokikomoto.spiral"}*/}
              {/*title="Spiral 3D"*/}
              {/*subtitle="How many layers can you pass?"*/}
              {/*isPhone={true}*/}
          {/*/>*/}
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
