import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./blog.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

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
              fluid(maxWidth: 350, maxHeight: 350){
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
        {data.allContentfulBlogSite.edges.map(edge => {
          return (
            <div className="container" style={{ position: "relative", top: "40px", }}>
              <div className="row" style={{ marginBottom: "35px" }}>
                <div className="col-lg-2 ">

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

                </div>
                <div className="col-lg-8">
                  <h2 className={styles.blog_title}>
                    <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
                  </h2>
                  <div>
                    <span><p className={styles.blog_time}>Posted {edge.node.createdAt}</p></span>
                  </div>
                  <div>
                    <p className={styles.blog_excerpt}>
                      {edge.node.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>

  )
}
export default Blog