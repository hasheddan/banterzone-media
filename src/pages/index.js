import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Richard Hamming on Luck {data.site.siteMetadata.title}</h1>
    <div>
      <p>
        From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>”.
      </p>
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted April 09, 2011</p>
  </div>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
