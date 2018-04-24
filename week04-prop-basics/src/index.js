import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const myProps = {
    testProp: 2,
    myProps: 3
};

ReactDOM.render(
    <App myProps={myProps} />,
    document.getElementById('root')
);
