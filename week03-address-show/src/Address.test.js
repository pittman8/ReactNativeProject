import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import Address from './components/Address';
import Adapter from 'enzyme-adapter-react-16';
import addresses from "./address-list";
configure({adapter: new Adapter()});

describe('Address Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const firstName = <p className="App-intro">firstName: Patty</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">lastName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const lastName = <p className="App-intro">lastName: Murray</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(lastName)).toEqual(true);
    });

    it('renders and displays the default address', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">address: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of address after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const address = <p className="App-intro">address: 154 Russell Senate Office Building</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(address)).toEqual(true);
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">city: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const city = <p className="App-intro">city: Washington</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(city)).toEqual(true);
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">state: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of state after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const state = <p className="App-intro">state: D.C.</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(state)).toEqual(true);
    });

    it('renders and displays the default zip', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">zip: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of zip after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const zip = <p className="App-intro">zip: 20510</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(zip)).toEqual(true);
    });

    it('renders and displays the default phone', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">phone: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of phone after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const phone = <p className="App-intro">phone: (202) 224-2621</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('renders and displays the default fax', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">fax: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of fax after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const fax = <p className="App-intro">fax: (202) 224-0238</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(fax)).toEqual(true);
    });

    it('renders and displays the default tollfree', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">tollfree: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of tollfree after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const tollfree = <p className="App-intro">tollfree: (866) 481-9186</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(tollfree)).toEqual(true);
    });

    it('renders and displays the default website', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">website: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of website after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const website = <p className="App-intro">website: https://www.murray.senate.gov</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(website)).toEqual(true);
    });
});

const getLast = (wrapper) => {
    const ninep = wrapper.find('p').last().debug();
    console.log(ninep);
};

const getFirst = (wrapper) => {
    const ninep = wrapper.find('p').first().debug();
    console.log(ninep);
};

getFirst(shallow(<Address addressList={addresses} />));
getLast(shallow(<Address addressList={addresses} />));
// getChild() function calls all <p> elements, and fails