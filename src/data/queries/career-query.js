import { useStaticQuery, graphql } from "gatsby"

export const useCareers = () => {
  const careers = useStaticQuery(
    graphql`query MyCareers {
      allCareersJson {
        nodes {
          career
          careerSkills
          specializations {
            bonusSkills
            name
            sourceBook
          }
        }
      }
    }`)
  return careers.allCareersJson.nodes
}