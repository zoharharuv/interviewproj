import { Component } from "react";

export class VideoSearch extends Component {
    state = {
        input: ''
    }

    onSearch = async () => {
        await this.props.onSearchVideos(this.state.input)
    }

    handleChange = (ev) => {
        this.setState({
            input: ev.target.value
        })
    }
    render() {
        return (
            <section className="video-search">
                <div className="search-bar">
                    <input onChange={this.handleChange} value={this.state.input} type="search" id="search-bar" placeholder="Search on YouTube" autoFocus />
                    <button onClick={this.onSearch}>🔍</button>
                </div>

            </section>
        )
    }
}