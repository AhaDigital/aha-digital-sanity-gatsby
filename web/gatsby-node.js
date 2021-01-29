/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createLandingPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPages(
        filter: { slug: { current: { ne: null } }, _id: {ne: "a78c99c2-4c15-4a29-9bf8-0d46f834422d"}}
      ) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPages || {}).edges || []

  pageEdges
    .forEach((edge) => {
      const {id, slug = {}} = edge.node
      const path = `/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/pages/landingPage.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createLandingPages(graphql, actions)
}
