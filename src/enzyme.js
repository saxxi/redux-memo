import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { generateStore } from './store';
import { ChatAppContainer } from './components/chat/ChatApp.container';

configure({ adapter: new Adapter() });

export const setUp = (initialState = {}) => {
  const store = generateStore(initialState);
  const wrapper = shallow(<ChatAppContainer store={store} />).childAt(0).dive();
  return wrapper;
}

export { shallow, mount, render };
export default Enzyme;
