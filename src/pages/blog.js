import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./blog.module.css"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
      allContentfulBlogSite {
        edges {
          node {
            contentful_id
            title
            createdAt(fromNow: true)
            excerpt 
            slug
            image {
                fluid(maxWidth: 350){ 
                    ...GatsbyContentfulFluid
                }
            }
          }
        }
      }
    }
    `
  )

  return (
    <Layout>
      <div>
        <SEO title="Blog" />
        <ul>
          {data.allContentfulBlogSite.edges.map(edge => {
            return (
              <li className="post" key={edge.node.id}>
                <h2>
                  <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
                </h2>
                <div>
                  <span>Posted on {edge.node.createdAt}</span>
                </div>

                <div className={styles.image_div}>
                  <div className={styles.image}>
                    {edge.node.image && (
                      <Img
                        className="featured"
                        fluid={edge.node.image.fluid}
                        alt={edge.node.title}
                      />
                    )}
                  </div>
                </div>
                <p>
                  {edge.node.excerpt}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>

  )
}
export default Blog