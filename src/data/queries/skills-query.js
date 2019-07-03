import { useStaticQuery, graphql } from "gatsby"

export const useCareers = () => {
  const skills = useStaticQuery(
    graphql`query MySkills {
        allSkillsJson {
            nodes {
              generalSkills {
                characteristic
                name
              }
            }
          }
        }`)
  return skills.allSkillsJson.nodes
}