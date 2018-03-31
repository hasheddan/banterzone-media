import React from 'react'
import Link from 'gatsby-link'
import AppBar from 'material-ui/AppBar'

const Header = (props) => (
  // <div
  //   style={{
  //     background: 'rebeccapurple',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}
  //   >
  //     <h1 style={{ margin: 0, display: 'inline' }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: 'white',
  //           textDecoration: 'none',
  //         }}
  //       >
  //         {props.data.site.siteMetadata.title}
  //       </Link>
  //     </h1>
  //     <h1 style={{ display: 'inline', float: 'right' }}>
  //     <Link
  //         to="/posts/"
  //         style={{
  //           color: 'white',
  //           textDecoration: 'none',
  //         }}
  //       >
  //         Posts
  //       </Link>
  //       </h1>
  //   </div>
  // </div>

  <AppBar
    title={props.data.site.siteMetadata.title}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
)

export default Header
