import { Component } from "react";
import playImg from "../styles/img/play.svg"
export class VideoPreview extends Component {
    render() {
        const { video, onPlayVideo } = this.props
        return (
            <section className="video-preview">
                <div className="video-card flex align-center space-between">
                    <img src={video.snippet.thumbnails.default.url} />
                    <div className="video-details flex col align-center gap" >
                        <span>{video.snippet.title}</span>
                        <span>{video.snippet.description}</span>
                        <span>Date: {video.snippet.publishedAt.substring(0, 10)}</span>
                    </div>
                    <span onClick={() => onPlayVideo(video)} className="play-btn flex align-center gap">
                        <img src={playImg} alt="" height="16px" />
                        <span>Play</span>
                    </span>
                </div>
            </section>
        )
    }
}