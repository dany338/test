import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './containers/App';
import Todo from './components/Todo';

configure({ adapter: new Adapter() });

describe('Test for App component', () => {
  test('Should renders app', () => {
    const page = mount(<App />);
    expect(page.find(Todo)).toHaveLength(1);
  });

})
