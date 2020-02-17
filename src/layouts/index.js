import React from 'react'
import { useLocation } from 'react-router-dom'
import BaseLayout from './base'

const ULR_NO_LAYOUT = ['/', '/home', '/recommend', '/donate', '/profile']

function Layout(props) {
  const location = useLocation()

  if (ULR_NO_LAYOUT.includes(location.pathname)) {
    return <BaseLayout {...props} />
  }
  return <>{props.children}</>
}

export default Layout
