import React from "react";
import "./App"
class StudentClass extends React.Component {
    render() {
        return (
            <div>
                {/* <table border="1">
                    <tr>
                        <th>ID: </th>
                        <th>Name: </th>
                        <th>Status: </th>
                    </tr>
                    {this.props.data.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.status}</td>
                            </tr>
                        )
                    })}
                </table> */}
                <div className="container">
                    <div>Id:  {this.props.id}</div>
                    <div>Name: {this.props.name}</div>
                    <div>status: {this.props.status}</div>
                </div>
            </div>
        )
    }
}
export default StudentClass;