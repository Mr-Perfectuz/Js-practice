import React from "react";
import "./App"
function StudentClass(props) {
    return (
        <div>
            <h1>Salom {props.name}</h1>
            <p>Men {props.age}</p>
            {props.children}
        </div>
    )
}
export default StudentClass;