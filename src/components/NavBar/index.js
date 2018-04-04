import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'
import { Input, Menu, Image, Sticky } from 'semantic-ui-react'

import BanterWeb from '../../images/BanterWeb.png'


const NavBar = () => (
  <Menu stackable>
    <Menu.Item header onClick={() => navigateTo('/')} fitted='vertically'>
      <Image src={BanterWeb}
        style={{ margin: '0 0 0 0', height: '60px' }}
      />
    </Menu.Item>
    <Menu.Item name='Podcasts' onClick={() => navigateTo('/podcasts/')} />
    <Menu.Item name='Articles' onClick={() => navigateTo('/posts/')} />
    <Menu.Menu position='right'>
      <Menu.Item icon="twitter" href="https://twitter.com/the_banterzone"/>
    </Menu.Menu>
  </Menu>
)

export default NavBar