import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function IndexPage() {
  // const [login, setLogin] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container-fluid px-0" style={{ position: "relative", top: "50px" }}>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className={styles.header_body}>
                <h2 className={styles.header_body_heading}>Blogging is my DNA</h2>
                <p className={styles.header_body_text}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries
                </p>
                <Link to={`/blog/`}>
                  <button className={styles.header_btn}>Start Reading</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6" style={{ textAlign: "center" }}>
              <img className={styles.header_body_img} src="https://www.pngjoy.com/pngm/165/3294044_office-worker-guy-with-laptop-png-hd-png.png" alt="landing page" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
//   const HandleLogin = () => {

//   if (!login) {
//     return (
//       <Layout>
//         <SEO title="Home" />
//         <div className="container-fluid px-0">
//           <div className="row no-gutters">
//             <div className="col-lg-12">
//               <div className={styles.content}>
//                 <img className={styles.img} src="https://www.bridgesedu.com/wp-content/uploads/2017/06/office-photo-1080x675.jpg" />
//                 <div className={styles.btn_div}>
//                   {/* <Link to={`/blog/`}>
//                     <button className={styles.btn}>Start Reading</button>
//                   </Link> */}
//                   {/* <button className={styles.btn} onClick={HandleLogin}>
//                     Login With Google
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     )
//   }


//   return (
//     <div>
//       <Layout>
//         <SEO title="Home" />
//         <div className="container-fluid px-0">
//           <div className="row no-gutters">
//             <div className="col-lg-12">
//               <div className={styles.content}>
//                 <img className={styles.img} src="https://www.bridgesedu.com/wp-content/uploads/2017/06/office-photo-1080x675.jpg" />
//                 <div className={styles.btn_div}>
//                   <Link to={`/blog/`}>
//                     <button className={styles.btn}>Start Reading</button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </div>
//   )
// }
// }


{/* <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className={styles.content}>
              <div className={styles.btn_div}>
                <Link to={`/blog/`}>
                  <button className={styles.btn}>Start Reading</button>
                </Link>
              </div>
              <img className={styles.img} src="https://www.bridgesedu.com/wp-content/uploads/2017/06/office-photo-1080x675.jpg" />
            </div>
          </div>
        </div>
      </div> */}