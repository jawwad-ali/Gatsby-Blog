import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
 
      <div className="container-fluid bgi">
        <div className="row">
          <div className="col-lg-12"> 
            <div className="home-body">
              <h1>over 10 years
                <div className="nestedh1">of experience in industry</div>
              </h1>
              <div className="text-div">
                <p className="text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...
              </p>
              </div>
              <div className="btn-div">
                <Link to={`/blog/`}>
                  <Button className="home-btn" variant="outlined" color="secondary">
                    Start Reading
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}