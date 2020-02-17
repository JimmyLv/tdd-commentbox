import { all } from '@redux-saga/core/effects'
import { sagas as bookSaga } from './book'

export default function* rootSaga() {
  yield all([bookSaga()])
  // code after all-effect
}
