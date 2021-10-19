import { Component } from "react";
import playImg from "../assets/img/play.svg"
export class VideoPreview extends Component {
    render() {
        const { video, onPlayVideo } = this.props
        return (
            <section className="video-preview">
                <div className="video-card flex align-center space-between">
                    <img src={video.imgUrl} />
                    <div className="video-details flex col align-center gap" >
                        <span>{video.title}</span>
                        <span>{video.description}</span>
                        <span>Date: {video.publishedAt.substring(0, 10)}</span>
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