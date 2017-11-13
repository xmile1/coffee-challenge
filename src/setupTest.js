import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import browserEnv from 'browser-env';
browserEnv(['window', 'document', 'navigator']);
configure({ adapter: new Adapter() });
