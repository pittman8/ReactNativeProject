import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
