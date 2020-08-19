import React from 'react'
import { render } from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}
const NiceMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>
        cool link 0
      </MenuItem>
      <MenuItem disabled index={1}>
        cool link 1
      </MenuItem>
      <MenuItem index={2}>
        cool link 2
      </MenuItem>
    </Menu>
  )
}

