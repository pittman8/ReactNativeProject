import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import App  from './components/App';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('App Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App/>);
        const welcome = <h1 className="App-title">Address Maven</h1>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper);
        const welcome = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});