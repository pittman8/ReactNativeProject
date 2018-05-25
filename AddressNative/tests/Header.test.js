import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Text } from 'react-native';

configure({ adapter: new Adapter() });

describe('Header tests', function() {
    it('renders without crashing', () => {
        const rendered = renderer.create(<Header />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders default output with react (mount)', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('finds a text element', () => {
        const wrapper = shallow(<Header />);
        const link = <Text>Address</Text>;
        expect(wrapper.dive().contains(link)).toBe(true);
    });
});
