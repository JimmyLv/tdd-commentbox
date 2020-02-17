import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './layouts'
import Home from './pages/home'
import Index from './pages/index'
import NotFound from './pages/404'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="*">
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
