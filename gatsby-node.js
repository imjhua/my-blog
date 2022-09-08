const path = require(`path`)
const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)


  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.frontmatter.slug
    createPage({
        path : slug,
        component : blogPostTemplate,
        context : { slug: slug }
    })
 })
}