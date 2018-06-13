import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import GetFile from '../components/GetFile';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('GetFile Test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        //console.log(wrapper.debug());
        const headerText = wrapper
            .dive()
            .find('div')
            .childAt(2)
            .prop('path');
        //console.log(headerText);
        expect(headerText).toBe('/get-file');
    });
});
