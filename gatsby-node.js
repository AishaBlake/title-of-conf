exports.createPages = async function({ actions, graphql}) {
  const { data } = await graphql(`
    query {
      allPerformersYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.allPerformersYaml.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/performer-detail.js`),
      context: { slug: slug },
    })
  });
}