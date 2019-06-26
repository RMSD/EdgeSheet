import { useStaticQuery, graphql } from "gatsby"

export const useCareers = () => {
  const careers = useStaticQuery(
    graphql`query MyQuery {
      allCareersJson {
        edges {
          node {
            career
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
  return careers.allCareersJson.edges
}