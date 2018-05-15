import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();

router.get('/getAddress', function(request, result) {
    'use strict';
    result.send({addresses: [
        {
            firstName: unknown,
            lastName: unknown,
            address: unknown,
            city: unknown,
            state: unknown,
            zip: unknown,
            phone: unknown,
            fax: unknown,
            tollfree: unknown
        },
        {
            firstName: 'Patty',
            lastName: 'Murray',
            address: '154 Russell Senate Office Building',
            city: 'Washington',
            state: 'D.C.',
            zip: '20510',
            phone: '(202) 224-2621',
            fax: '(202) 224-0238',
            tollfree: '(866) 481-9186'
        }
    ]});
});
