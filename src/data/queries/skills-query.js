import { useStaticQuery, graphql } from "gatsby"

export const useSkills = () => {
  const skills = useStaticQuery(
    graphql`query MySkills {
      allSkillsJson {
        nodes {
          characteristic
          isCombat
          key
          name
        }
      }
    }`)
  return skills.allSkillsJson.nodes
}