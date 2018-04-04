import _ from 'lodash'
import React, { Component } from 'react'
import Link from "gatsby-link"
import { Label, Input, Icon } from 'semantic-ui-react'


export default class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      posts: this.props.data.allMarkdownRemark.edges,
      filtered: [],
      value: "",
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => {
    this.setState({
      isLoading: false,
      filtered: [],
      value: "",
      count: 0,
    })
  }

  filterPosts = (e, {value}) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      // const isMatch = result => re.test(result.title)
      const flt = _.filter(this.state.posts, (p) => {
        return re.test(p.node.frontmatter.title) || re.test(p.node.frontmatter.author) || re.test(p.node.frontmatter.category)
      })

      this.setState({
        isLoading: false,
        filtered: flt,
        count: flt.length,
      })
      console.log(this.state.filtered)
    }, 300)
  }

  render() {
    const { isLoading, posts, filtered, count } = this.state

    return(
      <div>
        <h6>Search by title, author, or sport.</h6>
        <Input fluid icon="search" placeholder='Search...' onChange={this.filterPosts}/>
          <h4>{count} Posts</h4>
          {filtered.map(({ node }) => (
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
                  </h3>
                  <Label as="a">{node.frontmatter.category}</Label>
                  <Label as="a" color="blue" >
                  <Icon name='user' />
                  {node.frontmatter.author}
                  </Label>
                  <p>{node.excerpt}</p>
                  <br/>
              </div>
          ))}
      </div>
  )
  }
}

export const query = graphql`
  query SearchQuery {
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
