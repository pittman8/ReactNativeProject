import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/menu.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return(
        <div className="Header">
            <AppBar
                title="Address Maven"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.handleToggle}
            />
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={this.handleToggle}
            >
                <AppBar title="Address Maven"/>

                <MenuItem
                    primaryText='Address'
                    containerElement={<Link to="/"/>}
                    onClick={this.handleToggle}
                />

                {/*MORE MENU ITEMS HERE*/}
            </Drawer>
        </div>
        );
    }
}
export default Header;