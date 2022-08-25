import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RocketsList from '../components/Rocket';
import store from '../redux/configureStore';

test('rockets list renders properly', () => {
  const tree = renderer
    .create(<Provider store={store}><RocketsList /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
