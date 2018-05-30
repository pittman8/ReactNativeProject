import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

export const gitItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/">
            <ListItemIcon>
                <SendIcon/>
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