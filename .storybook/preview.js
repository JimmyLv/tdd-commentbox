import { addDecorator } from '@storybook/react';
import 'antd-mobile/dist/antd-mobile.css'

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider } from 'styled-components';

const middlewares = [];
const mockStore = configureStore(middlewares);

addDecorator(StoryRouter());

const theme = {
  main: 'mediumseagreen',
};

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <Provider store={mockStore()}>{storyFn()}</Provider>
  </ThemeProvider>
));
