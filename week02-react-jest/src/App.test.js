import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import { App } from './App';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Jest Create React Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const fileSign = <p className="App-intro">file: url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        expect(wrapper.contains(fileSign)).toEqual(true);
    });

});







