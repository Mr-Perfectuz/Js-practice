import React from "react";
import "./App"
import "./Student.css"
export default class StudentClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "  ",
            count: 0,
            surname: ""
        }
        this.onChange = this.onChange.bind(this)
    }
    onTextChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    render() {

        var decrement = () => {
            if (this.state.count > 0) {
                this.setState({ count: this.state.count - 1 });
            }
        }
        var increment = () => {
            this.setState({ count: this.state.count + 1 });
        }
        return (
            <div>
                <div>
                    <button onClick={decrement}>-</button>
                    <h1>{this.state.count}</h1>
                    <button onClick={increment}>+</button>
                    <h1>name: {this.state.name}</h1>
                    <h1>surname: {this.state.surname}</h1>
                </div>
                <br />
                <input name="name" onChange={this.onTextChange} placeholder="Name:" type="text" value={this.state.name}></input>
                <br />
                <input name="surname" onChange={this.onTextChange} placeholder="Surname:" type="text" value={this.state.surname}></input>
            </div>

        )
    }

}
