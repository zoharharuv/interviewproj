import { Component } from "react";

export class VideoPlayer extends Component {
    render() {
        const { playingVideo } = this.props
        return (
            <section className="video-player">
                {playingVideo ? <iframe width="450" height="350"
                    src={`https://www.youtube.com/embed/${playingVideo.id.videoId}`}>
                </iframe>
                :
                'bruri'}
            </section>
        )
    }
}