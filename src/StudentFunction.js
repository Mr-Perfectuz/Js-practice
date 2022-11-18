import React from "react";
import "./App"
import lightOn from "./assets/on.jpg"
import lighOff from "./assets/off.jpg"
export default class StudentFunction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            light: true
        }
    }

    onSubmit() {

    }

    render() {
        const onChange = () => {
            this.setState({
                light: !this.state.light
            });
        }

        return (
            <div className="container">
                {<img width="200px" height="250px"
                    src={this.state.light ? lightOn : lighOff} />}
                <button onClick={onChange}>Submit</button>
            </div>

        )
    }
}
