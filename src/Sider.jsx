import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
function Sider() {
    const [sider,setSider]=useState(false)

  return (
      
      <>

      <div className='sider'>
<Sidebar toggled={false} backgroundColor='transparent' defaultCollapsed={true} collapsed={true}collapsedWidth="100%" closeOnClick={true} rtl={true} >
  <Menu >
    <SubMenu label="Charts" >
      <MenuItem > Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>;





    </div>
      </>
  )
}

export default Sider
