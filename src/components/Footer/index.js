import React from 'react'
import Link from 'gatsby-link'
import { Grid, Container, Header, List, Segment, Divider, Image } from 'semantic-ui-react'

import BanterWebWhite from '../../images/BanterWebWhite.png'


const Footer = () => (
    <div>
    <Segment
    inverted
    vertical
    style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
  >
    <Container textAlign='center'>
      {/* More Ideas: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/app/Layouts/FixedMenuLayout.js */}
      <Image
        centered
        size='small'
        src={BanterWebWhite}
      />
      <Divider inverted section />
      
      <List horizontal inverted divided link>
        <List.Item as='a' href='mailto:banterzonemedia@gmail.com'>Contact Us</List.Item>
        <List.Item>&copy; 2018 - Banterzone Media</List.Item>
      </List>
    </Container>
  </Segment>
</div>
)

export default Footer