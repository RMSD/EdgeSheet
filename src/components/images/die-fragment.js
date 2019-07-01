import { graphql } from "gatsby"

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 50, maxHeight: 50) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`