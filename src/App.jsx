import React from 'react';
import { AppHeader } from './cmps/AppHeader';
import { VideoSearch } from './cmps/VideoSearch';
import { VideoList } from './cmps/VideoList';
import { VideoPlayer } from './cmps/VideoPlayer';
import { AppFooter } from './cmps/AppFooter';
import { videoService } from './services/video.service'


export class App extends React.Component {
  state = {
    videos: [],
    playingVideo: null
  }

  async componentDidMount() {
    const videos = await videoService.getVideos('Coding Academy')
    this.setState({
      videos,
      playingVideo: videos[0]
    })
  }

  onSearchVideos = async (searchKey) => {
    const videos = await videoService.getVideos(searchKey)
    this.setState({ videos })
  }

  onPlayVideo = (playingVideo) => {
    playingVideo.id += `?autoplay=1`
    this.setState({ playingVideo })
  }

  render() {
    const { videos, playingVideo } = this.state
    return (
      <section className="app">
        <AppHeader />
        <VideoSearch onSearchVideos={this.onSearchVideos} />
        <VideoList onPlayVideo={this.onPlayVideo} videos={videos} />
        <VideoPlayer playingVideo={playingVideo} />
        <AppFooter currentVideo={this.state.playingVideo} />
      </section>
    )
  }
}

