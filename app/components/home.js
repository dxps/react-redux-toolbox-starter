import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from "react-toolbox/lib/button";

// export default () => {
//     <div>Home</div>
// }

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Home<br/>
                <Link to="about"><Button label="About" /></Link>
            </div>
        );
    }

}