import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('App tests', function() {
    it('renders without crashing', () => {
        const rendered = renderer.create(<App />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders default output with react (mount)', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('test specific node to check if it has Header', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug());
        const hasHeader = <Header />;
        expect(wrapper.contains(hasHeader)).toBe(true);
    });
});
