import { Component } from "react";

export class VideoSearch extends Component {
    render() {
        return (
            <section className="video-search">
                <div class="search-bar">
                    <input type="search" id="search-bar" placeholder="Search a video!" autofocus />
                    <button >🔍</button>
                    {/* <button onClick={onSearch}>🔍</button> */}
                </div>

            </section>
        )
    }
}