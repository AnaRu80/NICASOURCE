import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import ReadQr from '../app/screens/ReadQr';
import store from '../app/store';

jest.mock('@expo/vector-icons');

describe('<ReadQr />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Provider store={store}><ReadQr /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
