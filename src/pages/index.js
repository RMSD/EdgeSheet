import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const LabelMeta = { style: { textAlign: `center`, paddingRight: `200px` } }
const rowItemPadding = {padding: `0px 50px 0px 50px`}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container" description="Character Information">
      <div className="row">
        <div className="three columns">
          <strong>Character Name</strong>
          <br />
          <em>Default Name</em>
        </div>
        <div className="three columns">
          <strong>Species</strong>
          <p>Human</p>
        </div>
        <div className="three columns">
          <strong>Carrer</strong>
          <p>Smuggler</p>
        </div>
        <div className="three columns">
          <strong>Specialization Trees</strong>
          <p>Gunslinger</p>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="three columns">
          <strong>Soak</strong>
          <p>0</p>
        </div>
        <div className="three columns">
          <strong>Wounds Maximum</strong>
          <p>10</p>
        </div>
        <div className="three columns">
          <strong>Strain Maximum</strong>
          <p>10</p>
        </div>
        <div className="three columns">
          <strong>Defense Maximum</strong>
          <p>0</p>
        </div>
      </div>

      <br />

      <h6 {...LabelMeta}>Character Characteristics</h6>
      <div className="row" description="Character Characteristics" style={{paddingLeft: `10px`}}>
        <div className="one columns" style={rowItemPadding}>
          <strong>Brawn</strong>
          <p>1</p>
        </div>
        <div className="one columns" style={rowItemPadding}>
          <strong>Agility</strong>
          <p>1</p>
        </div>
        <div className="one columns" style={rowItemPadding}>
          <strong>Intellect</strong>
          <p>1</p>
        </div>
        <div className="one columns" style={rowItemPadding}>
          <strong>Cunning</strong>
          <p>1</p>
        </div>
        <div className="one columns" style={rowItemPadding}>
          <strong>Willpower</strong>
          <p>1</p>
        </div>
        <div className="one columns" style={rowItemPadding}>
          <strong>Presence</strong>
          <p>1</p>
        </div>
        <div className="one columns"  description="Force, is conditional..." style={rowItemPadding}>
          <strong>The Force</strong>
          <p>1</p>
        </div>
      </div>
    </div>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
</div>
    <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
