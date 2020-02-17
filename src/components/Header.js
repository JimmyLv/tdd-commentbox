import { Icon } from 'antd-mobile'
import React from 'react'
import styled from 'styled-components'

export function Header({ title = 'ND Library' }) {
  return (
    <StyledHeader>
      <div>{title}</div>
      <Icon type="search" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  min-height: 56px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
