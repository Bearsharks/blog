import React from 'react'
import styled from '@emotion/styled'

const HeaderWrapper = styled.header`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 20px 0;
  font-weight : 600;
  font-size: 50px;
  text-align: center;
  line-height: 1.5;
  font-family: "Sans-serif"
`

const Header = function ({children}) {
  return (
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  )
}

export default Header;