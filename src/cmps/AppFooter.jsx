import { Component } from "react";

export class AppFooter extends Component {
    render() {
        const {currentVideo} = this.props
        return (
            <section className="app-footer flex center-center">
                {
                    currentVideo && <h3>
                       {
                           `Currently Playing: ${currentVideo.title}`
                       }
                    </h3>
                }
            </section>
        )
    }
}