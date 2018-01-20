import React from 'react'
import Link from 'gatsby-link'

const Stories = ({ data }) => (
  <div>
    <h1>Geschichten</h1>

    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li>
          <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export const pageQuery = graphql`
  query AllStories {
    allMarkdownRemark(
      filter: { frontmatter: { tag: { eq: "geschichte" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Stories
