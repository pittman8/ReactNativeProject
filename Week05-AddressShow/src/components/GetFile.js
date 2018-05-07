import React, { Component } from 'react';

class GetFile extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0'
        };

    }

    render() {
        return(
            <div className="GetFile">
                <p className="App-intro">
                    Nine: {this.state.nine}
                </p>
                <button className="elf" onClick={this.getNine}>Get Nine</button>
                <hr>
                </hr>
            </div>
        );
    }

    getNine = () => {
        this.setState({
            nine: '9'
        })
    };
}
export default GetFile;