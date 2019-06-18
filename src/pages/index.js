import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div class="row">
      <div class="one column">1</div>
      <div class="one column">2</div>
      <div class="one column">3</div>
      <div class="one column">4</div>
      <div class="one column">5</div>
      <div class="one column">6</div>
      <div class="one column">7</div>
    </div>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
</div>
    <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
