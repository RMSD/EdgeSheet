import { useStaticQuery, graphql } from "gatsby"

export const useSpecies = () => {
    const careers = useStaticQuery(
      graphql`query MySpecies {
        allSpeciesJson {
          nodes {
            baseCharacterstics {
              key
              value
            }
            baseStrain
            baseWounds
            name
            sourceBook
            speciesFeat
            strainCharacterstic
            woundCharacterstic
          }
        }
      }
      `)
    return careers.allSpeciesJson.nodes
  }