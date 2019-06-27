import { useStaticQuery, graphql } from "gatsby"


export const useSpecies = () => {
    const careers = useStaticQuery(
      graphql`query MySpecies {
        allSpeciesJson {
          edges {
            node {
              name
              baseCharacterstics {
                key
                value
              }
              baseWounds
              woundCharacterstic
              baseStrain
              strainCharacterstic
              speciesFeat
              sourceBook
            }
          }
        }
      }`)
    return careers.allSpeciesJson.edges
  }