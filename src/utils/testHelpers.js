import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

export function ReduxWrapper({
  initialState,
  store = mockStore(initialState),
  children,
}) {
  return <Provider store={store}>{children}</Provider>
}

export function renderWithRedux(
  ui,
  { initialState, store = mockStore(initialState) } = {}
) {
  return {
    ...render(
      <ReduxWrapper initialState={initialState} store={store}>
        {ui}
      </ReduxWrapper>
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

export const RouterWrapper = ({
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
  children,
}) => <Router history={history}>{children}</Router>

// test utils file
export function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <RouterWrapper route={route} history={history}>
        {ui}
      </RouterWrapper>
    ),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

export const ReduxRouterWrapper = ({
  initialState,
  store = mockStore(initialState),
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
  children,
}) => (
  <ReduxWrapper initialState={initialState} store={store}>
    <RouterWrapper route={route} history={history}>
      {children}
    </RouterWrapper>
  </ReduxWrapper>
)

export function renderWithReduxAndRouter(
  ui,
  {
    initialState,
    store = mockStore(initialState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <ReduxRouterWrapper
        initialState={initialState}
        store={store}
        route={route}
        history={history}
      >
        {ui}
      </ReduxRouterWrapper>
    ),
    history,
    store,
  }
}
