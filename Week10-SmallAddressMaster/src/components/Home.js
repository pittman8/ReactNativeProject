import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/icons/Menu';
=======

>>>>>>> d77c811ca3538dc255053618f809946129c679ec
const styles = {};

class Home extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <h1 ><HomeIcon /> Home <HomeIcon /></h1>
                <p>Welcome to Address Maven</p>
                <p>Click the <Menu /> icon in the upper left corner<br />
                    to navigate throughout the website</p>
=======
                <h1>Home</h1>
>>>>>>> d77c811ca3538dc255053618f809946129c679ec
            </div>
        );
    }
}

export default withStyles(styles)(Home);