import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = () => (
  <div className="container_fluid" style={{ backgroundColor: "rebeccapurple", width: "100%" }} >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Link to="/">
            <h1 className={styles.heading}>Blogger</h1>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

{/* <img width="76" src="https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612" alt="website logo" /> */ }
{/* <h1>Blogging</h1> */ }

{/* <div className={styles.btn_div}>
      <Link to={`/blog/`}>
        <button className={styles.btn}>Start Reading</button>
      </Link>
    </div> */}