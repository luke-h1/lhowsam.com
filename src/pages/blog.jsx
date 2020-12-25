/* eslint-disable */

import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero/Hero';
import { theme } from '../styles/Themes';
import Blog from "../components/Blog/Blog"
const index = () => {
  return (
    <Layout >
      <SEO title="Home" />
      <Blog theme={theme} />
    </Layout>
  )
}
export default index
// { data, location }
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <SEO title="All posts" />
  //       <Hero theme={theme} />
  //       <RecentBlogPosts theme={theme} />
  //       {/* <Bio /> */}
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )


//   <ol style={{ listStyle: `none` }}>
//   {posts.map(post => {
//     const title = post.frontmatter.title || post.fields.slug

//     return (
//       <li key={post.fields.slug}>
//         <article
//           className="post-list-item"
//           itemScope
//           itemType="http://schema.org/Article"
//         >
//           <header>
//             <h2>
//               <Link to={post.fields.slug} itemProp="url">
//                 <span itemProp="headline">{title}</span>
//               </Link>
//             </h2>
//             <small>{post.frontmatter.date}</small>
//           </header>
//           <section>
//             <p
//               dangerouslySetInnerHTML={{
//                 __html: post.frontmatter.description || post.excerpt,
//               }}
//               itemProp="description"
//             />
//           </section>
//         </article>
//       </li>
//     )
//   })}
// </ol>