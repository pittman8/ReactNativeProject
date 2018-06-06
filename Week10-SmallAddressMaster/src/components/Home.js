import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/icons/Menu';

const styles = {};

class Home extends Component {
    render() {
        return (
            <div>
                <h1 ><HomeIcon /> Home <HomeIcon /></h1>
                <p>Welcome to Address Maven</p>
                <p>Click the <Menu /> icon in the upper left corner<br />
                    to navigate throughout the website</p>
            </div>
        );
    }
}

export default withStyles(styles)(Home);