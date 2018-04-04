import React from 'react'
import Link from 'gatsby-link'
import { Grid, Image, Item } from 'semantic-ui-react'

const FrontCells = ({ data }) => (
  <div>
    
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Grid >
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src='https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7335ddddbdb2e401ce4f50507524d900&auto=format&fit=crop&w=1350&q=80' />
            </Grid.Column>
            <Grid.Column width={11}>
              <h1>{node.frontmatter.title}</h1>
              <p>{node.excerpt}</p>
              <p><em>{node.frontmatter.date}</em></p>
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