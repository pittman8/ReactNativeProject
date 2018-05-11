import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
import RaisedButton from 'material-ui/RaisedButton';

class GetFile extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    render() {
        return (
            <div className="GetFile">
                <p className="App-intro">File: {this.state.file}</p>
                <RaisedButton
                    label="Get File"
                    labelPosition="before"
                    primary={true}
                    icon={
                        <FontIcon className="material-icons" color={red500}>
                            rss_feed
                        </FontIcon>
                    }
                    style={styles.button}
                    onClick={this.getFile}
                />
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
