import React from 'react'
import { fakeBook } from '../fixtures/book'
import { ReduxWrapper } from '../utils/testHelpers'
import { TagList } from './TagList'

export default {
  title: 'TagList',
}

const initialState = {
  book: { list: [fakeBook, fakeBook] },
}

export function tagList() {
  return (
    <ReduxWrapper initialState={initialState}>
      <TagList category={'编程'} />
    </ReduxWrapper>
  )
}
