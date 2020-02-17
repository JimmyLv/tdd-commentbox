import { render } from '@testing-library/react'
import { simpleBook } from './BookItem.stories'

test('should show region and author of book', () => {
  const { queryByTestId } = render(simpleBook())

  expect(queryByTestId('book-author').textContent).toBe('[美] Kyle')
})
