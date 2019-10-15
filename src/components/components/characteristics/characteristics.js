import React, { useContext } from "react"
import { CharState, DispatchChar } from "../../contexts/characteristic-context"

const CharacteristicDescriptionPanel = () => {
    const state = useContext(CharState);
    const dispatch = useContext(DispatchChar);

    /* Base Characteristics cals and JSX */
    const characteristics = ["Brawn", "Agility", "Intelligence", "Cunning", "Willpower", "Presence"]
    const columns = []

    characteristics.forEach(element => {
        const elementValueNumber = state["base" + element]
        const additionalValueNumber = state["additional" + element]
        const display = elementValueNumber + additionalValueNumber

        columns.push(
            <div key={element} className="column">
                <strong>{element}</strong>
                <p>{display}</p>
                <input className="input" type="number" placeholder={"Extra " + element}
                    onChange={(event) => dispatch({ type: "CHANGE_" + element.toUpperCase(), value: parseInt(event.target.value) })}
                    id="characterName" />
            </div>)
    });

    /* Gameplay Characteristics cals and JSX */
    const soak = state.soak
    const maxWounds = state.baseWounds + state["base" + state.woundCharacterstic] + state["additional" + state.woundCharacterstic]
    const maxStrain = state.baseStrain + state["base" + state.strainCharacterstic] + state["additional" + state.strainCharacterstic]
    const meleeDef = state.defenseMelee
    const rangedDef = state.defenseRanged


    return (
        <>
            <div className="columns" description="Character Characteristics">
                {columns}
            </div>

            <br />

            <div className="columns">
                <div className="column">
                    <strong>Soak</strong>
                    <p>{soak}</p>
                </div>
                <div className="column">
                    <strong>Wounds Maximum</strong>
                    <p>{maxWounds}</p>
                </div>
                <div className="column">
                    <strong>Strain Maximum</strong>
                    <p>{maxStrain}</p>
                </div>
                <div className="column">
                    <strong>Defense Maximums</strong>
                    <p>Melee Defense: {meleeDef} | Ranged Defense: {rangedDef}</p>
                </div>
            </div>
        </>)
}

export default CharacteristicDescriptionPanel