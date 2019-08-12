import React from 'react'
import { Invert } from 'mdx-deck/layouts'

export default ({ children }) => (
  <Invert
    style={{
      display: 'grid',
      fontWeight: 'bolder',
      padding: '5rem 0',
      gridColumnGap: '15%',
      gridAutoFlow: 'column',
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr'
    }}>
    {children}
  </Invert>
)
