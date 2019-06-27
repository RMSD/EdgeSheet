import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import CharacterDescriptionPanel from "../components/components/nameplate/nameplate"
import CharacteristicDescriptionPanel from "../components/components/characteristics/characteristics"
import SEO from "../components/seo"
//import Image from "../components/image"

const CenteredHeaderMeta = { style: { textAlign: `center`, fontWeight: `500`, textDecoration: `underline` } }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <br />
      <br />

      <CharacterDescriptionPanel />

      <br />
      <br />

      <h6 {...CenteredHeaderMeta}>Character Characteristics</h6>
      <CharacteristicDescriptionPanel />

      <br />
      <br />

      <h6 {...CenteredHeaderMeta}>Skills</h6>
      <table className="u-full-width" description="Character Skills">
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
      <br />

      <h6 {...CenteredHeaderMeta}>Weapons</h6>
      <table className="u-full-width" description="Character Weapons">
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
