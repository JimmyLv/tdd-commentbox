import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { renderWithRouter } from '../utils/testHelpers'
import { tagList } from './TagList.stories'

test('should verify the tag link', () => {
  const history = createMemoryHistory()
  const { queryByText } = renderWithRouter(tagList(), { history })

  userEvent.click(queryByText('JavaScript'))

  expect(history.location.search).toBe('?tag=JavaScript')
})
