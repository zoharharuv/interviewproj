import { Component } from "react";

export class AppFooter extends Component {
    render() {
        const {vp} = this.props
        return (
            <section className="app-footer flex center-center">
                {
                    vp && <h3>
                       {
                           `Currently Playing: ${vp.snippet.title}`
                       }
                    </h3>
                }
            </section>
        )
    }
}