import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const ProficiencyDie = () => (
    <StaticQuery
      query={graphql`
        query {
          proficiencyDie: file(relativePath: { eq: "Proficiency_Die.png" }) {
              ...squareImage
          }
        }
      `}
      render={data => <Img fluid={data.proficiencyDie.childImageSharp.fluid} />}
    />
  )
  export default ProficiencyDie