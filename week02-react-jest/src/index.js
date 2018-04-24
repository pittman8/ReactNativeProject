import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Address from './components/Address';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <div>
        <App />
        <Address/>
    </div>,
    document.getElementById('root')
);