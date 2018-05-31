import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';

export const gitItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/">
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Address"/>
        </ListItem>
    </div>
);

export const demoItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/get-file">
            <ListItemIcon>
                <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="Get File"/>
        </ListItem>

    </div>
);