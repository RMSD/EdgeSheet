import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container" description="Character Information">
      <div className="row">
        <div className="three columns">1</div>
        <div className="three columns">2</div>
        <div className="three columns">3</div>
        <div className="three columns">4</div>
      </div>

      <div className="row" description="Character Characteristics">
      <div className="one columns">c5</div>
        <div className="one columns">1</div>
        <div className="one columns">2</div>
        <div className="one columns">3</div>
        <div className="one columns">4</div>
        <div className="one columns">5</div>
        <div className="one columns">6</div>
        <div className="one columns">7</div>
        <div className="one columns" description="Force, is conditional...">8</div>
      </div>
    </div>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
</div>
    <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
