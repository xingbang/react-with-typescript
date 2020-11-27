import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Input from './components/Input/input'
import Icon from './components/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Word</h1>
        <Input size="sm"  placeholder="请输入正确的名称" value="" icon="coffee"/>
        <Icon icon="coffee" theme="primary" size="10x" />
        <Menu defaultIndex={'0'} mode="horizontal" defaultOpenSubMenus={['4']}>
          <MenuItem index={'1'}>
            cool link 0
          </MenuItem>
          <MenuItem index={'2'}>
            cool link 1
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="opened">
            <MenuItem>
              drop1
            </MenuItem>
            <MenuItem>
              drop2
            </MenuItem>
          </SubMenu>
        </Menu>
        <div>
          <Button size = "sm">ButtonSize.Small</Button>
          <Button disabled>button</Button>
          <Button size = "lg">ButtonSize.Large</Button>
        </div>
        <div>
          <Button btnType="default">ButtonType.Default</Button>
          <Button btnType="primary">ButtonType.Primary</Button>
          <Button btnType="danger">ButtonType.Danger</Button>
          <Button btnType="link" href="#">ButtonType.Link</Button>
        </div>
      </header>
      {process.env.REACT_APP_xingbang}
    </div>
  );
}

export default App;
