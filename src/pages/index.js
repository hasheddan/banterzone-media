import React, { Component } from 'react'
import Link from 'gatsby-link'
import FrontCells from '../components/FrontCells'


export default class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        test
        <FrontCells data={this.props.data}/>
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }
    limit: 10) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            author
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