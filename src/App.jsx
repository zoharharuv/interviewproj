import React from 'react';
import { AppHeader } from './cmps/AppHeader';
import { VideoSearch } from './cmps/VideoSearch';
import { VideoList } from './cmps/VideoList';
import { VideoPlayer } from './cmps/VideoPlayer';
import { AppFooter } from './cmps/AppFooter';
import { getVideos, startVideo } from './services/video.service'


class App extends React.Component {
  state = { videos: [], showAlert: false }

  async componentDidMount() {
    const videos = await getVideos()
    this.setState({ videos })
  }

  componentWillUnmount() {
  }

  onPerformVideo = (video) => {
    console.log('onPerformVideo', video);
    startVideo(video)
  }

  render() {
    return (
      <section className="app">
        <AppHeader />
        <VideoSearch />
        <VideoList />
        <VideoPlayer />
        <AppFooter />
      </section>
    )
  }
}

export default App;

{/* <main class="main-container">
<section class="left-row">
  <header>
    <img class="logo" src="img/logo.svg" alt="Wikitube"/>
  </header>
  <div class="top5-container"></div>
</section>

<section class="right-row">
  <div class="search-bar">
    <input type="search" id="search-bar" placeholder="Search a video!" onkeypress="onEnter(event)" autofocus/>
    <button onclick="onSearch()">🔍</button>
  </div>
  <div class="video-container"></div>
  <div class="wiki-container"></div>
</section>

</main>

<section class="footer">
<div class="history"></div>
<button id="clear-history" onclick="onClear()">Clear history</button>
<button id="change-theme" onclick="onChangeTheme()">🎨</button>
</section> */}