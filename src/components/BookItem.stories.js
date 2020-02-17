import React from 'react'
import { fakeBook } from '../fixtures/book'
import { BookItem } from './BookItem'

export default {
  title: 'BookItem',
}

export function simpleBook() {
  return (
    <div style={{ maxWidth: 300 }}>
      <BookItem book={fakeBook} />
    </div>
  )
}
