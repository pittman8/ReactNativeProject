import React, { Component } from "react";

class GetFile extends Component {
  constructor() {
    super();
    this.state = {
      file: "unknown"
    };
  }

  render() {
    return (
      <div className="GetFile">
        <p className="App-intro">File: {this.state.file}</p>
        <button className="elf" onClick={this.getFile}>
          Get File
        </button>
        <hr />
      </div>
    );
  }

  getFile = () => {
    this.setState({
      file: "url-file.js"
    });
  };
}
export default GetFile;
