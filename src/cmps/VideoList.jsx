import { Component } from "react";
import { VideoPreview } from './VideoPreview';

export class VideoList extends Component {
    render() {
        const { videos, onPlayVideo } = this.props
        return (
            <section className="video-list">
                {videos.length ? videos.map(video => <VideoPreview
                    key={video.id}
                    video={video}
                    onPlayVideo={onPlayVideo} />)
                : <h1>Loading..</h1>}
            </section>
        )
    }
}