import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import AppBar from 'material-ui/AppBar'

import Header from '../components/Header'

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header data={data} /> */}
    {/* <AppBar
    title={data.site.siteMetadata.title}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  /> */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`