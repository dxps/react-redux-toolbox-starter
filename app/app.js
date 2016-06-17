import React, {Component} from "react";
import Header from "./components/header";
import style from "./app";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Header />
                <section className={style.content}>
                    {this.props.children}
                </section>
            </div>
        );
    }

}
