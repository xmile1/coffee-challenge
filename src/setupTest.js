// const jsdom = require('jsdom').jsdom;
//
// global.document = jsdom('<body></body>');
// global.window = document.defaultView;
// global.navigator = window.navigator;

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
