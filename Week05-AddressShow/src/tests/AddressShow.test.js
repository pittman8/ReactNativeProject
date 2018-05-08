import React from 'react';
import AddressShow from '../components/AddressShow';
import {configure, shallow} from 'enzyme';
import addresses from "../address-list";
import Adapter from 'enzyme-adapter-react-16';
import '../index.css';
configure({adapter: new Adapter()});

const address = addresses[0];

describe('AddressShow Shallow Suite', function () {

    const debug = false;

    const addressTest = {
        firstName: 'Patty',
        lastName: 'Murray',
        address: '154 Russell Senate Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 224-2621',
        fax: '(202) 224-0238',
        tollfree: '(866) 481-9186'
    };

    /*
    * Display debug information about a DOM node of a component by index
    * @param {object} wrapper - The HTML generated by your component
    * @param {number} index - Index of HTML element you want to see.
    * @param {boolean} talkToMe - Speak even if quiet is true
    */
    const getIndex = function (wrapper, index, talkToMe) {
        if (debug || talkToMe) {
            const ninep = wrapper.find('div#addressShow').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={addresses[0]}/>);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={addresses[1]}/>);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the first name', () => {
        defaultFieldTest('firstName: unknown', 0);
        afterClickFieldTest('firstName: ' + addressTest.firstName, 0);
    });

    it('renders and displays the last name', () => {
        defaultFieldTest('lastName: unknown', 0);
        afterClickFieldTest('lastName: ' + addressTest.lastName, 0);
    });

    it('renders and displays the address', () => {
        defaultFieldTest('address: unknown', 0);
        afterClickFieldTest('address: ' + addressTest.address, 0);
    });

    it('renders and displays the city', () => {
        defaultFieldTest('city: unknown', 0);
        afterClickFieldTest('city: ' + addressTest.city, 0);
    });

    it('renders and displays the state', () => {
        defaultFieldTest('state: unknown', 0);
        afterClickFieldTest('state: ' + addressTest.state, 0);
    });

    it('renders and displays the zip', () => {
        defaultFieldTest('zip: unknown', 0);
        afterClickFieldTest('zip: ' + addressTest.zip, 0);
    });

    it('renders and displays the phone', () => {
        defaultFieldTest('phone: unknown', 0);
        afterClickFieldTest('phone: ' + addressTest.phone, 0);
    });

    it('renders and displays the fax', () => {
        defaultFieldTest('fax: unknown', 0);
        afterClickFieldTest('fax: ' + addressTest.fax, 0);
    });

    it('renders and displays the tollfree', () => {
        defaultFieldTest('tollfree: unknown', 0);
        afterClickFieldTest('tollfree: ' + addressTest.tollfree, 0);
    });
});