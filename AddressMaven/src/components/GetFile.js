import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container: {
        flexGrow: 1,
        textAlign: 'center'
    }
};

class GetFile extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
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
export default withStyles(styles)(GetFile);
