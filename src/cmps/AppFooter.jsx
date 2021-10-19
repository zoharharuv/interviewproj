import { Component } from "react";

export class AppFooter extends Component {
    render() {
        const {vp} = this.props
        return (
            <section className="app-footer">
                <h1>FOOTER</h1>
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