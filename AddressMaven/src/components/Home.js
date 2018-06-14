import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const styles = {
    container: {
        flexGrow: 1,
        textAlign: 'center'
    }
};

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <h1>
                    <HomeIcon /> Home <HomeIcon />
                </h1>
                <p>Welcome to Address Maven</p>
                <p>
                    Click the <Menu /> icon in the upper left corner<br />
                    to navigate throughout the website
                </p>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
