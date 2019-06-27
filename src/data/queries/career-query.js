import { useStaticQuery, graphql } from "gatsby"

export const useCareers = () => {
  const careers = useStaticQuery(
    graphql`query MyCareers {
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