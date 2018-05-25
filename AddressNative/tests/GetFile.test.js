import React from 'react';
import GetFile from '../GetFile';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Text } from 'react-native';

configure({ adapter: new Adapter() });

describe('GetFile tests', function() {
    it('renders without crashing', () => {
        const rendered = renderer.create(<GetFile />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders default output with react (mount)', () => {
        const tree = renderer.create(<GetFile />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders state of File paragraph before button click', () => {
        const wrapper = shallow(<GetFile />);
        const file = <Text>File: unknown</Text>;
        expect(wrapper.contains(file)).toBe(true);
    });
});
