import { Component } from "react";

export class VideoPreview extends Component {
    render() {
        const { video, onPlayVideo } = this.props
        return (
            <section className="video-preview">
                <div className="video-card">
                    <img src={video.snippet.thumbnails.medium.url} />
                    {/* <iframe width="300" height="200"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}>
                    </iframe> */}
                    <button onClick={() => onPlayVideo(video)}>play</button>
                </div>
            </section>
        )
    }
}