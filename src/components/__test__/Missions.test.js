import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import renderer from 'react-test-renderer';
import MissionLi from '../Missions';

describe(MissionLi, () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionLi
          key={1}
          id="1"
          name="Mission impossible"
          description="An impossible mission"
          reserved
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('mission displays correct name information', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MissionLi
          key={1}
          id="1"
          name="Mission impossible"
          description="An impossible mission"
          reserved
        />
      </Provider>,
    );
    const missionName = getByTestId('name').textContent;
    expect(missionName).toBe('Mission impossible');
  });

  it('mission displays correct description information', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MissionLi
          key={1}
          id="1"
          name="Mission impossible"
          description="An impossible mission"
          reserved
        />
      </Provider>,
    );
    const missionDescription = getByTestId('description').textContent;
    expect(missionDescription).toBe('An impossible mission');
  });
});
