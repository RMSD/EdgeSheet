import { useStaticQuery, graphql } from "gatsby"

export const useCarrers = () => {
  const carrers = useStaticQuery(
    graphql`query MyQuery {
      allCarrersJson {
        edges {
          node {
            carrer
            carrerSkills
            specializations {
              bonusSkills
              sourceBook
              specialization
            }
          }
        }
      }
    }`)
  return carrers.allCarrersJson.edges
}