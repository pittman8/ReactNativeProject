import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles/index';

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MuiThemeProvider theme={themeDark}>
            <App />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
