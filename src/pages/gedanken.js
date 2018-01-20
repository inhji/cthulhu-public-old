import React from 'react'
import Link from 'gatsby-link'

const Thoughts = ({ data }) => (
  <div>
    <h1>Gedanken</h1>

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
  query AllThoughts {
    allMarkdownRemark(filter: { frontmatter: { tag: { eq: "gedanke" } } }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default Thoughts
