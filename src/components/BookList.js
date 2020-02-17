import React from 'react'
import { Grid } from 'antd-mobile'
import queryString from 'query-string'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { createSelector } from 'reselect'

import { getBookList } from '../store/book'
import { BookItem } from './BookItem'

const getBooksByCategory = createSelector(
  getBookList,
  (_, category) => category,
  (books, category) => books.filter(book => book.category === category)
)

export function BookList({ category }) {
  const location = useLocation()
  const { tag } = queryString.parse(location.search)

  const booksByCategory = useSelector(state =>
    getBooksByCategory(state, category)
  )
  const books = tag
    ? booksByCategory.filter(book => book.tags.includes(tag))
    : booksByCategory

  return (
    <Grid
      data={books}
      columnNum={3}
      square={false}
      renderItem={book => <BookItem key={book.name} book={book} />}
    />
  )
}
