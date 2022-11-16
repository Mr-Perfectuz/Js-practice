import React from "react";
import StudentFunction from "./StudentFunction"
import StudentClass from "./StudentClass";
import "./App.css"


export default class App extends React.Component {
  render() {
    return (
      <div>
        <StudentClass name="Anavarbek" age="23" />
        {/* <div>some text</div> */}
      </div>
    );
  }
}