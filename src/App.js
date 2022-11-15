import React from "react";
import StudentFunction from "./StudentFunction"
import StudentClass from "./StudentClass";
import "./App.css"


export default class App extends React.Component {
  render() {
    var students = [
      { id: 1, name: "Anvarbek", status: "Student" },
      { id: 2, name: "Olimjon", status: "worker" },
      { id: 3, name: "Sardor", status: "upemployed" },
      { id: 4, name: "Akbar", status: "CTO" },
      { id: 5, name: "John", status: "Manager" },
      { id: 6, name: "Alex", status: "Student" }
    ];
    return (
      <div>
        {students.map((value) => {
          return (
            <StudentFunction
              id={value.id}
              name={value.name}
              status={value.status} />)
        })
        }
      </div>
    );
  }
}