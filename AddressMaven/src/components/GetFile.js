import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css/App.css'

class GetFile extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    render() {
        return (
            <div className="App-intro">
                <p>File: {this.state.file}</p>
                <Button variant="raised" color="primary" onClick={this.getFile}>
                    Get File
                </Button>
            </div>
        );
    }

    getFile = () => {
        this.setState({
            file: 'url-file.js'
        });
    };
}
export default GetFile;