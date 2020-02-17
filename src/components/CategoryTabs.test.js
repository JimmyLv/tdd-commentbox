import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../utils/testHelpers'
import { categoryTabs } from './CategoryTabs.stories'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}))

test('should show category list and fetch books by category', () => {
  const { queryByText } = renderWithRouter(categoryTabs())

  userEvent.click(queryByText('文学'))

  expect(mockDispatch).toBeCalledWith({
    type: 'book/fetch',
    payload: {
      category: '文学',
    },
  })
})

test('should show "文学" category book when select "文学" tab', () => {})
