const fs = require("fs")

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Talk implements Node @dontInfer {
      id: ID!
      name: String!
      eventName: String!
      location: String!
      date: Date! @dateformat
      slug: String!
      eventUrl: String
      slidesUrl: String
      youtubeUrl: String
    }
  `)
}

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/"

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")

    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
  }

  // Quick-and-dirty helper to convert date strings into URL-friendly short dates.
  // e.g. 2019-07-25T19:54:21.906Z   ===>    20190725
  const datify = date => {
    return new Date(date).toISOString().replace(/(t.*|-)/gi, "")
  }

  createResolvers({
    Talk: {
      slug: {
        resolve: source => slugify(source.name + "-" + datify(source.date)),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/"
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/talks.js"),
    context: {
      today: new Date().toISOString(),
    },
  })

  const result = await graphql(`
    query {
      allTalk(sort: { fields: date, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error loading talks", result.errors)
    return
  }

  const talks = result.data.allTalk.nodes

  talks.forEach(talk => {
    const slug = talk.slug

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/talk.js"),
      context: {
        talkID: talk.id,
      },
    })
  })
}
