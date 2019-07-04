import React, { useContext } from "react"
import { CharState, DispatchChar } from "../../contexts/characteristic-context"
import { NameplateState } from "../../contexts/nameplate-context"

const CharacteristicDescriptionPanel = () => {
    const nameState = useContext(NameplateState)
    const state = useContext(CharState);
    const dispatch = useContext(DispatchChar);

    /* Base Characteristics cals and JSX */
    const species = nameState.species
    const columns = []
    const totalCharacistics = new Map()

    species.baseCharacterstics.forEach(element => {
        const elementValueNumber = parseInt(element.value)
        const additionalValueNumber = state["additional" + element.key]
        const display = elementValueNumber + additionalValueNumber
        totalCharacistics.set(element.key, display)

        columns.push(
            <div key={element.key} className="two columns">
                <strong>{element.key}</strong>
                <p>{display}</p>
                <input className="u-full-width" type="number" placeholder={"Extra " + element.key}
                    onChange={(event) => dispatch({ type: "CHANGE_" + element.key.toUpperCase(), value: parseInt(event.target.value) })}
                    id="characterName" />
            </div>)
    });

    /* Gameplay Characteristics cals and JSX */
    const soak = state.soak
    const maxWounds = parseInt(species.baseWounds) + parseInt(totalCharacistics.get(species.woundCharacterstic))
    const maxStrain = parseInt(species.baseStrain) + parseInt(totalCharacistics.get(species.strainCharacterstic))
    const meleeDef = state.defenseMelee
    const rangedDef = state.defenseRanged


    return (
        <>
            <div className="row" description="Character Characteristics">
                {columns}
            </div>

            <br />

            <div className="row">
                <div className="three columns">
                    <strong>Soak</strong>
                    <p>{ soak }</p>
                </div>
                <div className="three columns">
                    <strong>Wounds Maximum</strong>
                    <p>{ maxWounds }</p>
                </div>
                <div className="three columns">
                    <strong>Strain Maximum</strong>
                    <p>{ maxStrain }</p>
                </div>
                <div className="three columns">
                    <strong>Defense Maximums</strong>
                    <p>Melee Defense: { meleeDef } | Ranged Defense: { rangedDef }</p>
                </div>
            </div>
        </>)
}

export default CharacteristicDescriptionPanel