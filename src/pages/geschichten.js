import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ data }) => (
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
    allMarkdownRemark(filter: { frontmatter: { tag: { eq: "geschichte" } } }) {
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

export default SecondPage
