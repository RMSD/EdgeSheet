import { useStaticQuery, graphql } from "gatsby"

export const carrers = () => {
    const { carrers } = useStaticQuery(
        graphql`
      query JSON {
            allLettersJson {
              edges {
                node {
                  skills
                  classSkills
                  specializations
                }
              }
            }
        }`)
    return carrers
}