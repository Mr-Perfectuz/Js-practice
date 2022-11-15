import React from "react";
import "./App"
function StudentFunction(props) {
    return (
        <div className="container">
            <div>Id:  {props.id}</div>
            <div>Name: {props.name}</div>
            <div>status: {props.status}</div>
        </div>

    )
}
export default StudentFunction;