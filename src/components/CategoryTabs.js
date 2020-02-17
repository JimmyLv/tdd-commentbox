import React from 'react'
import { Tabs } from 'antd-mobile'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

export function CategoryTabs({ categories = [], children }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleChangeCategory = tab => {
    history.push({ search: '' })
    return dispatch({
      type: 'book/fetch',
      payload: {
        category: tab,
      },
    })
  }
  return (
    <Tabs
      tabs={categories}
      renderTab={tab => <span data-testid="category-tab">{tab}</span>}
      onTabClick={handleChangeCategory}
    >
      {children}
    </Tabs>
  )
}
