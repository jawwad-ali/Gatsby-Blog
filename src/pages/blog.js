import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./blog.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
 
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
    <>
      <SEO title="blog" />
      <div className="back">
        <Link to="../">
          <ArrowBackIcon />
        </Link>
      </div>
      {data.allContentfulBlogSite.edges.map(edge => {
        return (
          <>

            <div className="article-container">
              <div className="article">
                <div className="article-img-div">
                  {edge.node.image && (
                    <Img
                      className="featured"
                      fluid={edge.node.image.fluid}
                      alt={edge.node.title}
                    />
                  )}
                </div>
                <div className="article-info">
                  <h3>
                    <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
                  </h3>
                  <div>
                    <span><p className="article-posted-time">Posted {edge.node.createdAt}</p></span>
                  </div>
                  <div>
                    <p className="excerpt">
                      {edge.node.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
export default Blog