import React from 'react';
import Address from '../Address';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from '../address-list';

configure({ adapter: new Adapter() });

describe('Address tests', function() {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise(resolve => {
                resolve({
                    ok: true,
                    json: function() {
                        return [
                            {
                                firstName: 'Patty',
                                lastName: 'Murray',
                                street: '154 Russell Senate Office Building',
                                city: 'Washington',
                                state: 'D.C.',
                                zip: '20510',
                                phone: '(202) 224-2621',
                                website: 'https://www.murray.senate.gov/',
                                contact:
                                    'https://www.murray.senate.gov/public/index.cfm/contactme'
                            }
                        ];
                    }
                });
            });
            return promise;
        });
    });

    const afterClickFieldTest = (wrapper, finder) => {
        setImmediate(() => {
            wrapper.update();
            wrapper.instance().setAddress(0);
            setImmediate(() => {
                wrapper.update();
                try {
                    finder();
                } catch (e) {
                    console.log(e);
                }
            });
        });
    };

    it('renders without crashing', () => {
        const rendered = renderer.create(<Address />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders default output with react (mount)', () => {
        const tree = renderer.create(<Address />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders state of First Name paragraph before button click', () => {
        const wrapper = shallow(<Address />);
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual(
            'unknown'
        );
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                wrapper.find('AddressShow').prop('address').firstName
            ).toEqual('Patty');
        });
    });

    it('renders state of last ame paragraph before button click', () => {
        const wrapper = shallow(<Address />);
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

    it('renders state of street paragraph before button click', () => {
        const wrapper = shallow(<Address />);
        expect(wrapper.find('AddressShow').prop('address').street).toEqual(
            'unknown'
        );
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').street).toEqual(
                '154 Russell Senate Office Building'
            );
        });
    });

    it('renders state of city paragraph before button click', () => {
        const wrapper = shallow(<Address />);
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

    it('renders state of state paragraph before button click', () => {
        const wrapper = shallow(<Address />);
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

    it('renders state of zip paragraph before button click', () => {
        const wrapper = shallow(<Address />);
        expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
            'unknown'
        );
    });

    it('renders state of zip after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
                '20510'
            );
        });
    });

    it('renders state of phone paragraph before button click', () => {
        const wrapper = shallow(<Address />);
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

    it('renders state of website paragraph before button click', () => {
        const wrapper = shallow(<Address />);
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

    it('renders state of contact paragraph before button click', () => {
        const wrapper = shallow(<Address />);
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
