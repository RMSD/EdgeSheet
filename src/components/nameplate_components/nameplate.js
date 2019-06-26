import React, { useContext }  from "react"
import SpeciesSelector from "./nameplate-dropdowns"
import {NameplateState, DispatchNamePlate, CHANGE_NAME} from "../contexts/nameplate-context.js"

const CharacterDescriptionPanel = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);

    return (
        <div className="row" description="Character Information">
            <div className="three columns">
                <strong>Character Name</strong>
                <input class="u-full-width" type="text" value={state.name} onChange={(event) => dispatch({type: CHANGE_NAME, value: event.target.value})} id="characterName" />
            </div>
            <div className="three columns">
                <strong>Species</strong>
                <SpeciesSelector />
            </div>
            <div className="three columns">
                <strong>Carrer</strong>
                <p>Smuggler</p>
            </div>
            <div className="three columns">
                <strong>Specialization Trees</strong>
                <p>Gunslinger</p>
            </div>
        </div>)
}

export default CharacterDescriptionPanel