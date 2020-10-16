import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styles from "./blog-post.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
    query($slug:String!){
        contentfulBlogSite(slug: {eq: $slug}) {
            title
            date(fromNow: true)
            image {
                fluid(maxWidth: 750){ 
                    ...GatsbyContentfulFluid
                }
            }
            desc {
                json
            }
        }
    }
`

const BlogPost = props => {
    return (
        <Layout>
            <SEO title={props.data.contentfulBlogSite.title} />
            <div className={styles.btn_div}>
                <Link to="/blog/">
                    <button className={styles.btn}>
                        Go Back
                </button>
                </Link>
            </div>

            <div className={styles.blog_container}>
                <h1 className={styles.blog_title}>{props.data.contentfulBlogSite.title}</h1>

                <span>
                    Posted: <strong>{props.data.contentfulBlogSite.date}</strong>
                </span>

                <div className={styles.image_div}>
                    <div className={styles.image}>
                        {props.data.contentfulBlogSite.image && (
                            <Img
                                className="featured"
                                fluid={props.data.contentfulBlogSite.image.fluid}
                                alt={props.data.contentfulBlogSite.title}
                            />
                        )}
                    </div>
                </div>

                <div className={styles.desc}>
                    <p className={styles.text}>
                        {documentToReactComponents(props.data.contentfulBlogSite.desc.json)}
                    </p>
                </div>
            </div>
        </Layout>
    )
}
export default BlogPost