import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Header from '../components/Header';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import {createMuiTheme} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';

configure({ adapter: new Adapter() });

describe('Header Test', function() {

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads Title text', () => {
        const wrapper = shallow(<Header />);
        const target = <Typography>Address Maven</Typography>;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });
});
