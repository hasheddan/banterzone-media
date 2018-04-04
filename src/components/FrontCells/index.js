import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const FrontCells = ({ data }) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
        <Image src='https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7335ddddbdb2e401ce4f50507524d900&auto=format&fit=crop&w=1350&q=80'/>
      </Grid.Column>
      <Grid.Column width={11}>
        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
        <p>{data.allMarkdownRemark.edges[0].node.excerpt}</p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={4}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default FrontCells