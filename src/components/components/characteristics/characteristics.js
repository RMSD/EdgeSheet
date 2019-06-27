import React, { useContext } from "react"
import { CharState, DispatchChar } from "../../contexts/characteristic-context"
import { NameplateState } from "../../contexts/nameplate-context"

const CharacteristicDescriptionPanel = () => {
    const nameState = useContext(NameplateState)
    const state = useContext(CharState);
    const dispatch = useContext(DispatchChar);

    const species = nameState.species.baseCharacterstics
    const columns = []

    species.forEach(element => {
        const elementValueNumber = parseInt(element.value)
        const additionalValueNumber = state["additional" + element.key]
        const display = elementValueNumber + additionalValueNumber

        columns.push(
            <div key={element.key} className="two columns">
                <strong>{element.key}</strong>
                <p>{display}</p>
                <input className="u-full-width" type="number" placeholder={"Extra " + element.key}
                    onChange={(event) => dispatch({ type: "CHANGE_" + element.key.toUpperCase(), value: parseInt(event.target.value) })}
                    id="characterName" />
            </div>)
    });

    return (
        <>
            <div className="row" description="Character Characteristics">
                {columns}
            </div>

            <br />

            <div className="row">
                <div className="three columns">
                    <strong>Soak</strong>
                    <p>0</p>
                </div>
                <div className="three columns">
                    <strong>Wounds Maximum</strong>
                    <p>10</p>
                </div>
                <div className="three columns">
                    <strong>Strain Maximum</strong>
                    <p>10</p>
                </div>
                <div className="three columns">
                    <strong>Defense Maximum</strong>
                    <p>0</p>
                </div>
            </div>
        </>)
}

export default CharacteristicDescriptionPanel