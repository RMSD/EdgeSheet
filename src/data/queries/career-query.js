import { useStaticQuery, graphql } from "gatsby"

export const useCareers = () => {
  const careers = useStaticQuery(
    graphql`query MyQuery {
      allCareersJson {
        edges {
          node {
            career
            careerSkills
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