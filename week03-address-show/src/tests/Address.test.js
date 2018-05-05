import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import Address from '../components/Address';
import Adapter from 'enzyme-adapter-react-16';
import addresses from "../address-list";
configure({adapter: new Adapter()});

describe('Address tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address/>);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('unknown');
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Patty');
        });

    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address/>);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').lastName).toEqual('unknown');
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').lastName).toEqual('Murray');
        });

    });

    it('renders and displays the default address', () => {
        const wrapper = shallow(<Address/>);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').address).toEqual('unknown');
    });

    it('renders state of address after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').address).toEqual('154 Russell Senate Office Building');
        });

    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address/>);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').city).toEqual('unknown');
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').city).toEqual('Washington');
        });

    });
});