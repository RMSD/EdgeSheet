import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const AbilityDie = () => (
  <StaticQuery
    query={graphql`
        query {
            abilityDie: file(relativePath: { eq: "Ability_Die.png" }) {
              ...SquareImage
          }
        }
      `}
    render={data => <Img fluid={data.abilityDie.childImageSharp.fluid} />}
  />
)
export default AbilityDie