import React from 'react';
import AddressShow from '../AddressShow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from '../address-list';
import { Text } from 'react-native';

configure({ adapter: new Adapter() });

describe('AddressShow tests', function() {
    const addressTest = {
        firstName: 'Patty',
        lastName: 'Murray',
        street: '154 Russell Senate Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 224-2621',
        website: 'https://www.murray.senate.gov/',
        contact: 'https://www.murray.senate.gov/public/index.cfm/contactme'
    };

    const defaultFieldTest = name => {
        const wrapper = shallow(<AddressShow address={addresses[0]} />);
        const welcome = <Text>{name}</Text>;
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = name => {
        const wrapper = shallow(<AddressShow address={addresses[1]} />);
        const welcome = <Text>{name}</Text>;
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the first name', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
    });

    it('renders and displays the last name', () => {
        defaultFieldTest('Last Name: unknown', 0);
        afterClickFieldTest('Last Name: ' + addressTest.lastName, 0);
    });

    it('renders and displays the street', () => {
        defaultFieldTest('Street: unknown', 0);
        afterClickFieldTest('Street: ' + addressTest.street, 0);
    });

    it('renders and displays the city', () => {
        defaultFieldTest('City: unknown', 0);
        afterClickFieldTest('City: ' + addressTest.city, 0);
    });

    it('renders and displays the state', () => {
        defaultFieldTest('State: unknown', 0);
        afterClickFieldTest('State: ' + addressTest.state, 0);
    });

    it('renders and displays the zip', () => {
        defaultFieldTest('Zip: unknown', 0);
        afterClickFieldTest('Zip: ' + addressTest.zip, 0);
    });

    it('renders and displays the phone', () => {
        defaultFieldTest('Phone: unknown', 0);
        afterClickFieldTest('Phone: ' + addressTest.phone, 0);
    });

    it('renders and displays the website', () => {
        defaultFieldTest('Website: unknown', 0);
        afterClickFieldTest('Website: ' + addressTest.website, 0);
    });

    it('renders and displays the contact', () => {
        defaultFieldTest('Contact: unknown', 0);
        afterClickFieldTest('Contact: ' + addressTest.contact, 0);
    });
});
