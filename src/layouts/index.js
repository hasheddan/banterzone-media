import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Link, { navigateTo } from 'gatsby-link'
import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import Header from '../components/Header'

const TemplateWrapper = ({ data, children }) => (
  <MuiThemeProvider>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <AppBar
        title={data.site.siteMetadata.title}
        onTitleClick={() => navigateTo('/')}
        style={{ backgroundColor: '#000080', position: 'fixed' }}
        showMenuIconButton={false}
        children={
          <div style={{ margin: 'auto' }}>
            <IconMenu
              iconButtonElement={<IconButton><MenuIcon color="white"/></IconButton>}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              style={{ color: 'white' }}
            >
              <MenuItem primaryText="Posts" onClick={() => navigateTo('/posts')} />
              <MenuItem primaryText="Podcasts" onClick={() => navigateTo('/posts')} />
            </IconMenu>
          </div>
        }
      />

      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 90,
        }}
      >
        {children()}
      </div>
    </div>
  </MuiThemeProvider>
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