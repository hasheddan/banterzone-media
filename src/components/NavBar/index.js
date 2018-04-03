import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'
import { Input, Menu, Image, Search, Grid, Header } from 'semantic-ui-react'

import BanterWeb from '../../images/BanterWeb.png'

// const getResults = () => _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))

// const source = _.range(0, 3).reduce((memo) => {
//   const name = faker.hacker.noun()

//   memo[name] = { // eslint-disable-line no-param-reassign
//     name,
//     results: getResults(),
//   }

//   return memo
// }, {})

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.data.allMarkdownRemark.edges,
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)
      console.log(this.state.posts)
      // const filteredResults = _.reduce(this.posts, (memo, category, name, date) => {
      //   const results = _.filter(this.posts, (o) => {
      //     return (o.frontmatter.title, isMatch)
      //   })
      //   if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign

      //   return memo
      // }, {})

      // this.setState({
      //   isLoading: false,
      //   results: filteredResults,
      // })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Menu>
        <Menu.Item header onClick={() => navigateTo('/')}>
          <Image src={BanterWeb}
            style={{ margin: '0 0 0 0', height: '60px' }}
          />
        </Menu.Item>
        <Menu.Item name='Podcasts' onClick={() => navigateTo('/podcasts/')} />
        <Menu.Item name='Articles' onClick={() => navigateTo('/posts/')} />
        <Menu.Menu position='right'>
          <Menu.Item>
          <Search
            aligned={'right'}
            category
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

// export const searchQuery = graphql`
//   query SearchQuery {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             category
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;