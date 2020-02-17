import React from 'react'
import { CategoryTabs } from './CategoryTabs'

export default {
  title: 'CategoryTabs',
}

export function categoryTabs() {
  return <CategoryTabs categories={['编程', '文学', '历史']} />
}
