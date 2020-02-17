import React from 'react'
import styled from 'styled-components'

export function BookItem({ book }) {
  return (
    <StyledBox data-testid="book-summary">
      <img src={book.cover} alt={book.name} />
      <div>{book.name}</div>
      <div>
        <span data-testid="book-author">
          [{book.region.split('')[0]}] {book.author}
        </span>
      </div>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  padding: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`
