import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
<<<<<<< HEAD
import HomeIcon from '@material-ui/icons/Home';
import LocationIcon from '@material-ui/icons/MyLocation';
import ComputerIcon from '@material-ui/icons/Computer';
=======
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
>>>>>>> d77c811ca3538dc255053618f809946129c679ec
import { Link } from 'react-router-dom';

export const gitItems = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
<<<<<<< HEAD
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/address">
            <ListItemIcon>
                <LocationIcon />
=======
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
    </div>,
    <div>
        <ListItem button component={Link} to="/address">
            <ListItemIcon>
                <DraftsIcon />
>>>>>>> d77c811ca3538dc255053618f809946129c679ec
            </ListItemIcon>
            <ListItemText primary="Address" />
        </ListItem>
    </div>

);

export const demoItems = (
    <div>
        <ListItem button component={Link} to="/init-db">
            <ListItemIcon>
<<<<<<< HEAD
                <ComputerIcon />
=======
                <DraftsIcon />
>>>>>>> d77c811ca3538dc255053618f809946129c679ec
            </ListItemIcon>
            <ListItemText primary="Initialize Database" />
        </ListItem>
    </div>
);
