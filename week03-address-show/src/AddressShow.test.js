import React from 'react';
import { mount } from 'enzyme';
import Address from './components/Address';
import addresses from "./address-list";
import './index.css';

const address = addresses[0];

describe('Address Mount Suite', function () {

    var quiet = true;

    /*
     * @param {object} wrapper - Container for a bunch of HTML nodes
     * @param {number} index - Index of HTML element.
     * @param {boolean} talkToMe - Speak even if quiet is true
     */
    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}  />);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const patty = <p className="App-intro">{name}</p>;
        wrapper.find('button#setAddress').simulate('click');
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(patty)).toEqual(true);
    };

    it('renders and displays the default first name', () => {
        defaultFieldTest('firstName: unknown', 0);
    });

    it('renders state of firstName after button click', () => {
        afterClickFieldTest('firstName: Patty', 0);
    });

    it('renders and displays the default last name', () => {
        defaultFieldTest('lastName: unknown', 1);
    });

    it('renders state of lastName after button click', () => {
        afterClickFieldTest('lastName: Murray', 1);
    });

    it('renders and displays the default address', () => {
        defaultFieldTest('address: unknown', 2);
    });

    it('renders state of address after button click', () => {
        afterClickFieldTest('address: 154 Russell Senate Office Building', 2);
    });

    it('renders and displays the default city', () => {
        defaultFieldTest('city: unknown', 3);
    });

    it('renders state of city after button click', () => {
        afterClickFieldTest('city: Washington', 3);
    });

    it('renders and displays the default state', () => {
        defaultFieldTest('state: unknown', 4);
    });

    it('renders state of state after button click', () => {
        afterClickFieldTest('state: D.C.', 4);
    });

    it('renders and displays the default zip', () => {
        defaultFieldTest('zip: unknown', 5);
    });

    it('renders state of zip after button click', () => {
        afterClickFieldTest('zip: 20510', 5);
    });

    it('renders and displays the default phone', () => {
        defaultFieldTest('phone: unknown', 6);
    });

    it('renders state of phone after button click', () => {
        afterClickFieldTest('phone: (202) 224-2621', 6);
    });

    it('renders and displays the default fax', () => {
        defaultFieldTest('fax: unknown', 7);
    });

    it('renders state of fax after button click', () => {
        afterClickFieldTest('fax: (202) 224-0238', 7);
    });

    it('renders and displays the default tollfree', () => {
        defaultFieldTest('tollfree: unknown', 8);
    });

    it('renders state of tollfree after button click', () => {
        afterClickFieldTest('tollfree: (866) 481-9186', 8);
    });

    it('renders and displays the default website', () => {
        defaultFieldTest('website: unknown', 9);
    });

    it('renders state of website after button click', () => {
        afterClickFieldTest('website: https://www.murray.senate.gov', 9);
    });
});