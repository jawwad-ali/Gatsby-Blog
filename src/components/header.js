import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = () => (
  <div className="container_fluid" style={{ backgroundColor: "rebeccapurple" }} >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.siteTitle_div}>
            <Link to="/">
              <h1 className={styles.siteTitle}>Blogger</h1>
            </Link>
          </div>
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