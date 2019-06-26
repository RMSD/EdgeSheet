import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import CharacterDescriptionPanel from "../components/nameplate_components/nameplate"
import SEO from "../components/seo"
//import Image from "../components/image"

const CenteredHeaderMeta = { style: { textAlign: `center`, fontWeight: `500`, textDecoration: `underline`, paddingRight: `200px` } }
const rowItemPadding = { padding: `0px 50px 0px 50px` }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <br />
      <CharacterDescriptionPanel />
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

      <h6 {...CenteredHeaderMeta}>Character Characteristics</h6>
      <div className="row" description="Character Characteristics" style={{ paddingLeft: `10px` }}>
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
        <div className="one columns" description="Force, is conditional..." style={rowItemPadding}>
          <strong>Force</strong>
          <p>1</p>
        </div>
      </div>

      <br />

      <h6 {...CenteredHeaderMeta}>Skills</h6>
      <table class="u-full-width" description="Character Skills">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Carrer</th>
            <th>Roll</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Astrogation (Int)</td>
            <td>No</td>
            <td>2g</td>
            <td>1</td>
          </tr>
          {/*Add dynamically populating json list here*/}
        </tbody>
      </table>

      <br />

      <h6 {...CenteredHeaderMeta}>Weapons</h6>
      <table class="u-full-width" description="Character Weapons">
        <thead>
          <tr>
            <th>Weapon</th>
            <th>Roll</th>
            <th>Damage</th>
            <th>Range</th>
            <th>Skill</th>
            <th>Special</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Blaster Pistol</td>
            <td>2g</td>
            <td>5</td>
            <td>Medium</td>
            <td>2 adv</td>
            <td></td>
          </tr>
          {/*Add dynamically populating json list here*/}
        </tbody>
      </table>

      <br />

      <div className="row">
        <div className="two columns">
          <strong>Available Experience</strong>
          <p>0</p>
        </div>
        <div className="two columns">
          <strong>Total Experience</strong>
          <p>0</p>
        </div>
        <div className="six columns"><p>&nbsp;</p></div>
        <div className="two columns">
          <strong>Credits</strong>
          <p>0</p>
        </div>
      </div>

      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>*/}
    </div>
  </Layout>
)

export default IndexPage
