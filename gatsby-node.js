const path = require('path')
const fetch = require('node-fetch')

exports.onCreateNode = async ({ node, getNode, loadNodeContent, boundActionCreators }) => {
  if (node.internal.type === `File`) {
    console.log(node)
  }
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  console.log(page)

  return new Promise((resolve, reject) => {
    resolve()
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {} // additional data can be passed via context
      })
    })
  })
}
