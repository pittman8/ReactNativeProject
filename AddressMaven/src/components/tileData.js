import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocationIcon from '@material-ui/icons/MyLocation';
import ComputerIcon from '@material-ui/icons/Computer';
import FileIcon from '@material-ui/icons/FileDownload';
import { Link } from 'react-router-dom';

export const gitItems = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/get-file">
            <ListItemIcon>
                <FileIcon />
            </ListItemIcon>
            <ListItemText primary="Get File" />
        </ListItem>
        <ListItem button component={Link} to="/address">
            <ListItemIcon>
                <LocationIcon />
            </ListItemIcon>
            <ListItemText primary="Address" />
        </ListItem>
    </div>
);

export const demoItems = (
    <div>
        <ListItem button component={Link} to="/init-db">
            <ListItemIcon>
                <ComputerIcon />
            </ListItemIcon>
            <ListItemText primary="Initialize Database" />
        </ListItem>
    </div>
);
