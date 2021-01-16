

query BlogIndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          body
          excerpt(pruneLength: 180, truncate: true)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            tags
            excerpt
            draft
          }
        }
      }
    }
  }