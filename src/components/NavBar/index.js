import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'
import { Input, Menu, Image } from 'semantic-ui-react'

import BanterWeb from '../../images/BanterWeb.png'


const NavBar = () => (
  <Menu>
    <Menu.Item header onClick={() => navigateTo('/')}>
      <Image src={BanterWeb}
        style={{ margin: '0 0 0 0', height: '60px' }}
      />
    </Menu.Item>
    <Menu.Item name='Podcasts' onClick={() => navigateTo('/podcasts/')} />
    <Menu.Item name='Articles' onClick={() => navigateTo('/posts/')} />
    <Menu.Menu position='right'>
    </Menu.Menu>
  </Menu>
)

export default NavBar