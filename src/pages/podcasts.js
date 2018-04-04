import React from 'react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'

import BZPodLogo from '../images/BZPodLogo.png'

const PodcastsPage = () => (
    <div>
        <Card>
            <Image src={BZPodLogo} />
            <Card.Content>
                <Card.Header>
                    The Banterzone
      </Card.Header>
                <Card.Meta>
                    <span className='date'>
                        Since March 2018
        </span>
                </Card.Meta>
                <Card.Description>
                    A show about sports and other things. We have many interns.
      </Card.Description>
      <hr/>
                <Label as="a" color="blue">
                    <Icon name='user' />
                    The Terminal
                  </Label>
                <Label as="a" color="blue" >
                    <Icon name='user' />
                    Owen Auch
                  </Label>
                  <hr/>
                <Label as="a" color="blue" >
                    <Icon name='user' />
                    Eric Grayson
                  </Label>
                <Label as="a" color="blue" >
                    <Icon name='user' />
                    Chris Detloff
                  </Label>
            </Card.Content>
            <Card.Content extra>
                <a href="https://itunes.apple.com/us/podcast/the-banterzone/id1366119571?mt=2">
                    <Icon name='music' />
                    Subscribe
      </a>
            </Card.Content>
        </Card>
    </div>
)

export default PodcastsPage
