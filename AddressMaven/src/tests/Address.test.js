import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Address from '../components/Address';
import Adapter from 'enzyme-adapter-react-16';
import addresses from '../address-list';
import { MuiThemeProvider } from '@material-ui/core/styles';
import dataManager from '../tools/FakeDataManager';
import { createMuiTheme } from '@material-ui/core/styles/index';
configure({ adapter: new Adapter() });

describe('Address tests', function() {
    let wrapper = null;

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    beforeEach(() => {
        wrapper = shallow(
            <Address dataManager={dataManager} addressList={addresses} />
        );
    });

    const addressProp = wrapper =>
        wrapper.find('WithStyles(AddressShow)').prop('address');

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <Address />
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('found WithStyles', () => {
        wrapper
            .dive()
            .find('WithStyles(AddressShow)')
            .prop('address');
    });

    it('renders and displays the default first name', () => {
        expect(addressProp(wrapper.dive()).firstName).toEqual('unknown');
    });

    // it('renders and displays the default first name from FakeData', () => {
    //         expect(wrapper.state().firstName).toEqual('Patty');
    //     });

    // it('renders state of firstName after button click', () => {
    //     wrapper.instance().setAddress(1);
    //     expect(wrapper.state().address.firstName).toEqual('Robert');
    // });

    it('renders and displays the default last name', () => {
        expect(addressProp(wrapper.dive()).lastName).toEqual('unknown');
    });

    it('renders and displays the default street', () => {
        expect(addressProp(wrapper.dive()).street).toEqual('unknown');
    });

    it('renders and displays the default city', () => {
        expect(addressProp(wrapper.dive()).city).toEqual('unknown');
    });

    it('renders and displays the default state', () => {
        expect(addressProp(wrapper.dive()).state).toEqual('unknown');
    });

    it('renders and displays the default first name', () => {
        expect(addressProp(wrapper.dive()).firstName).toEqual('unknown');
    });

    it('renders and displays the default zip', () => {
        expect(addressProp(wrapper.dive()).zip).toEqual('unknown');
    });

    it('renders and displays the default phone', () => {
        expect(addressProp(wrapper.dive()).phone).toEqual('unknown');
    });

    it('renders and displays the default website', () => {
        expect(addressProp(wrapper.dive()).website).toEqual('unknown');
    });

    it('renders and displays the default contact', () => {
        expect(addressProp(wrapper.dive()).contact).toEqual('unknown');
    });
});
