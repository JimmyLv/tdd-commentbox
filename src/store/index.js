// @ts-nocheck
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import bookReducer, * as book from './book'

const rootReducer = combineReducers({
  [book.NAME]: bookReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunkMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
