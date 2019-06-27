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
              name
              bonusSkills
              sourceBook
            }
          }
        }
      }
    }`)
  return careers.allCareersJson.edges
}