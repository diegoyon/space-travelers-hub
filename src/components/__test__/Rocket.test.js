import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import renderer from 'react-test-renderer';
import Rocket from '../Rocket';

describe(Rocket, () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rocket
          key={1}
          rocket_name="Rocket Name"
          description="Rocket Description"
          flickr_images={['image1', 'image2']}
          id={1}
          reserved
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('rocket displays correct name information', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Rocket
          key={1}
          rocket_name="Rocket Name"
          description="Rocket Description"
          flickr_images={['image1', 'image2']}
          id={1}
          reserved
        />
      </Provider>,
    );
    const rocketName = getByTestId('name').textContent;
    expect(rocketName).toBe('Rocket Name');
  });

  it('rocket displays correct description information', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Rocket
          key={1}
          rocket_name="Rocket Name"
          description="Rocket Description"
          flickr_images={['image1', 'image2']}
          id={1}
          reserved
        />
      </Provider>,
    );
    const rocketDescription = getByTestId('description').textContent;
    expect(rocketDescription).toBe('Rocket Description');
  });
});
