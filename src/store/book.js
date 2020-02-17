import { call, put, takeLatest } from 'redux-saga/effects'
import * as service from '../services/book'

export const NAME = 'book'
export const types = {
  FETCH: `${NAME}/FETCH_BOOKS`,
  FETCH_ERROR: `${NAME}/FETCH_BOOKS_ERROR`,
  UPDATE: `${NAME}/UPDATE_BOOKS`,
}
export const actions = {}

export function* sagas() {
  function* fetchBooks({ payload }) {
    try {
      const books = yield call(service.query, payload)
      yield put({ type: types.UPDATE, payload: { books } })
    } catch (error) {
      yield put({ type: types.FETCH_ERROR, error })
    }
  }
  yield takeLatest(types.FETCH, fetchBooks)
}

const initialState = {
  list: [],
  total: 0,
  error: null,
}

export default function reducer(state = initialState, action) {
  const { type, payload, error } = action
  switch (type) {
    case types.FETCH_ERROR:
      return { ...state, error }
    case types.UPDATE:
      return { ...state, list: payload.books, total: payload.books.length }
    default:
      return state
  }
}

export const getBookList = state => state.book.list
export const selectors = {}
