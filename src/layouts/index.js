import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link, { navigateTo } from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'
import { Input, Menu, Image } from 'semantic-ui-react'

import BanterWeb from '../images/BanterWeb.png'


const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Menu>
      <Menu.Item header onClick={() => navigateTo('/')}>
        <Image src={BanterWeb} size="tiny" />
      </Menu.Item>
        <Menu.Item name='Podcasts' onClick={() => navigateTo('/podcasts/')}/>
        <Menu.Item name='Articles' onClick={() => navigateTo('/posts/')}/>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 40,
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