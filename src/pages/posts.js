import _ from 'lodash'
import React, { Component } from 'react'
import Link from "gatsby-link"
import { Label, Input } from 'semantic-ui-react'


export default class PostsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      posts: this.props.data.allMarkdownRemark.edges,
      filtered: {},
    }
  }

  filterPosts = (e, {value}) => {
    console.log(value)
  }

  render() {
    const { isLoading, posts } = this.state

    return(
      <div>
        <Input fluid icon="search" placeholder='Search...' onChange={this.filterPosts}/>
          <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4>
          {posts.map(({ node }) => (
              <div key={node.id}>
                  <h3>
                      <Link
                          to={node.fields.slug}
                          css={{ textDecoration: `none`, color: `inherit` }}
                      >
                          {node.frontmatter.title}
                      </Link>
                      {" "}
                      <span color="#BBB">— {node.frontmatter.date}</span>
                      <Label as="a">{node.frontmatter.category}</Label>
                  </h3>
                  <p>{node.excerpt}</p>
                  <br/>
              </div>
          ))}
      </div>
  )
  }
}

// export default PostsPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
