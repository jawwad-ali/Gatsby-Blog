import React from "react"
import { graphql, Link } from "gatsby"

import Img from "gatsby-image"
import SEO from "../components/seo"
import styles from "./blog-post.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
    query($slug:String!){
        contentfulBlogSite(slug: {eq: $slug}) {
            title
            author
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
        <>
            <SEO title={props.data.contentfulBlogSite.title} />
            {/* <div className={styles.btn_div}>
                <Link to="/blog/">
                    <button className={styles.btn}>
                        Go Back
                </button>
                </Link>
            </div> */}
            <div className="back">
                <Link to="../">
                    <ArrowBackIcon />
                </Link>
            </div>
            <div className={styles.blog_container}>
                <h1 className={styles.blog_title}>{props.data.contentfulBlogSite.title}</h1>
                <span>
                    <p className={styles.blog_date}>Posted: {props.data.contentfulBlogSite.date}</p>
                </span>
                <span>
                    <p className={styles.blog_author}>Author: {props.data.contentfulBlogSite.author}</p>
                </span>

                <div className={styles.image_div}>
                    <div className={styles.image}>
                        {props.data.contentfulBlogSite.image && (
                            <Img
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
        </>
    )
}
export default BlogPost