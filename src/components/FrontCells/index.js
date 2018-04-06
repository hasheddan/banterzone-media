import React from 'react'
import Link from 'gatsby-link'
import { Grid, Image, Item, Label, Icon } from 'semantic-ui-react'

const FrontCells = ({ data }) => (
  <div>
    
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Grid >
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={node.frontmatter.thumbnail} />
            </Grid.Column>
            <Grid.Column width={11}>
              <h1>{node.frontmatter.title}</h1>
              <Label as="a">{node.frontmatter.category}</Label>
                  <Label as="a" color="blue" >
                  <Icon name='user' />
                  {node.frontmatter.author}
                  </Label>
                <span>{"  "}<em>{node.frontmatter.date}</em></span>
                <br />
                <br />
              <p>{node.excerpt}</p>
              <Link
                to={node.fields.slug}
                css={{ textDecoration: `none`, color: `inherit` }}
              >
                Read More
                      </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    ))}
    
  </div>
)

export default FrontCells