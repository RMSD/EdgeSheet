import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import CharacterDescriptionPanel from "../components/components/nameplate/nameplate"
import CharacteristicDescriptionPanel from "../components/components/characteristics/characteristics"
import SEO from "../components/seo"
import AbilityDie from "../components/images/ability"
import SkillTable from "../components/components/skills/skills"

const CenteredHeaderMeta = { style: { textAlign: `center`, fontWeight: `500`, textDecoration: `underline` } }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `Star`, `Wars`, `Edge`, `Empire`, `Age`, `Rebellion`, `Force`, `Destiny`, `Character`, `Sheet`, `Creation`]} />
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
      <SkillTable />


      <br />
      <br />

      <h6 {...CenteredHeaderMeta}>Weapons</h6>
      <table className="table is-fullwidth" description="Character Weapons">
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
            <td><div className="columns is-gapless"><div className="column is-2 is-narrow"><p>2</p></div><div className="column is-2 is-narrow"><AbilityDie /></div></div></td>
            <td>5</td>
            <td>Medium</td>
            <td>2 adv</td>
            <td></td>
          </tr>
          <tr>
            <td>To be Implemented</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/*Add dynamically populating json list here*/}
        </tbody>
      </table>

      <br />
      <br />

      <div className="columns">
        <div className="column is-2">
          <strong>Available Experience</strong>
          <p>0</p>
        </div>
        <div className="column is-2">
          <strong>Total Experience</strong>
          <p>0</p>
        </div>
        <div className="column is-6"><p>&nbsp;</p></div>
        <div className="column is-2">
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
