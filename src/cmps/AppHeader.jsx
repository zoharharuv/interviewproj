import { Component } from "react";

export class AppHeader  extends Component{
    render(){
        return(
            <section className="app-header flex align-center space-between">
                    <h1>PlayList</h1>
                    <nav className="flex ">
                        <span>About us</span>
                        <span>Statistics</span>
                        <span>Login</span>
                    </nav>
            </section>
        )
    }
}