import { Component } from "react";

export class VideoPreview extends Component {
    render() {
        const { video, onPlayVideo } = this.props
        console.log("🚀 ~ VideoPreview ~ render ~ video", video)
        return (
            <section className="video-preview">
                <div className="video-card flex align-center space-between">
                    <img src={video.snippet.thumbnails.default.url} />
                    <div className="video-details flex col align-center gap" >
                        <span>{video.snippet.title}</span>
                        <span>{video.snippet.description}</span>
                        <span>{video.snippet.publishedAt.toLocaleString('en-US')}</span>
                    </div>
                    <button onClick={() => onPlayVideo(video)}>play</button>
                </div>
            </section>
        )
    }
}