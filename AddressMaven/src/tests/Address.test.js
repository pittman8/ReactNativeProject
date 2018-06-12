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
    let  wrapper = null;

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    beforeEach(() => {
        wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
    });

    const addressProp = wrapper => wrapper
        .find('WithStyles(AddressShow)')
        .prop('address');

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

    // const afterClickFieldTest = (wrapper, finder) => {
    //     setImmediate(() => {
    //         wrapper.update();
    //         wrapper.instance().setAddress(0);
    //         setImmediate(() => {
    //             wrapper.update();
    //             try {
    //                 finder();
    //             } catch (e) {
    //                 console.log(e);
    //             }
    //         });
    //     });
    // };

    it('renders and displays the default first name', () => {
        expect(addressProp(wrapper).firstName).toEqual('unknown');
    });

    it('renders and displays the default first name from FakeData', () => {
        expect(wrapper.state().address.firstName).toEqual('Patty');
    });

    it('renders state of firstName after button click', () => {
        wrapper.instance().setAddress(1);
        expect(wrapper.state().address.firstName).toEqual('Robert');
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address />);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').lastName).toEqual(
            'unknown'
        );
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                wrapper.find('AddressShow').prop('address').lastName
            ).toEqual('Murray');
        });
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<Address />);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').street).toEqual(
            'unknown'
        );
    });

    it('renders state of street after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').street).toEqual(
                '154 Russell Senate Office Building'
            );
        });
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address />);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').city).toEqual(
            'unknown'
        );
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').city).toEqual(
                'Washington'
            );
        });
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<Address />);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').state).toEqual(
            'unknown'
        );
    });

    it('renders state of state after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').state).toEqual(
                'D.C.'
            );
        });
    });

    it('renders and displays the default zip', () => {
        const wrapper = shallow(<Address />);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
            'unknown'
        );
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
                '20510'
            );
        });
    });

    it('renders and displays the default phone', () => {
        const wrapper = shallow(<Address />);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').phone).toEqual(
            'unknown'
        );
    });

    it('renders state of phone after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').phone).toEqual(
                '(202) 224-2621'
            );
        });
    });

    it('renders and displays the default website', () => {
        const wrapper = shallow(<Address />);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').website).toEqual(
            'unknown'
        );
    });

    it('renders state of website after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').website).toEqual(
                'https://www.murray.senate.gov/'
            );
        });
    });

    it('renders and displays the default contact', () => {
        const wrapper = shallow(<Address />);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').contact).toEqual(
            'unknown'
        );
    });

    it('renders state of contact after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').contact).toEqual(
                'https://www.murray.senate.gov/public/index.cfm/contactme'
            );
        });
    });
});
