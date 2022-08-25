import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import MissionLi from '../components/missions';

test('check snapshot of missions list', () => {
  const component = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <MissionLi
            name="mission"
            description="new description"
            reserved={false}
            id="1"
          />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(component).toMatchSnapshot();
});

test('check snapshot of missions list', () => {
  const component = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <MissionLi
            name="mission"
            description="new description"
            reserved={false}
            id="2"
          />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(component).toMatchSnapshot();
});
