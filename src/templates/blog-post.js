import React from "react"
import { Label, Icon } from 'semantic-ui-react'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <Label as="a">{post.frontmatter.category}</Label>
      <Label as="a" color="blue" >
        <Icon name='user' />
        {post.frontmatter.author}
      </Label> 
      <br/>
      <br/> 
      <p><em>{post.frontmatter.date}</em></p>     
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        category
        author
      }
    }
  }
`;