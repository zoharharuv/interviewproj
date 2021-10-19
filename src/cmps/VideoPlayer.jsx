import { Component } from "react";

export class VideoPlayer extends Component {
    render() {
        const { playingVideo } = this.props
        return (
            <section className="video-player">
                {playingVideo ? <iframe allow='autoplay' width="450" height="350" title="youtube-video"
                    src={`https://www.youtube.com/embed/${playingVideo.id}`}>
                </iframe>
                :
                <h1>No video playing</h1>}
            </section>
        )
    }
}