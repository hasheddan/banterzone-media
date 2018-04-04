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
              <Image src='https://picsum.photos/200/?random' />
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