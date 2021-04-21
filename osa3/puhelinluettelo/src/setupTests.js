import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

global.console = {
  log: jest.fn(), // console.log are ignored in tests

  // Keep native behaviour for other methods
  // use below to print out things in your own tests, not `console.log`
  //log: console.log, // change to this to see console.log again
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};

// window alert mocked (ignored)
global.alert = jest.fn();