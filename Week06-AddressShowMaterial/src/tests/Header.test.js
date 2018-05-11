import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Header from '../components/Header';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Header Test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h1 className="App-title">Address Maven</h1>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
