import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
        return <div>
            <div className="container">
                <h1>Hello Project</h1>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage />, App);