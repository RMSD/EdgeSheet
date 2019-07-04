import React, { useContext } from "react"
import { SpeciesDropdown, CareerDropdown, SpecializationDropdown } from "./nameplate-dropdowns"
import { NameplateState, DispatchNamePlate, CHANGE_NAME } from "../../contexts/nameplate-context"

const CharacterDescriptionPanel = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);

    return (
        <div className="row" description="Character Information">
            <div className="three columns">
                <strong>Character Name</strong>
                <input className="u-full-width" type="text" value={state.name}
                    onChange={(event) => dispatch({ type: CHANGE_NAME, value: event.target.value })} id="characterName" />
            </div>
            <div className="three columns">
                <strong>Species</strong>
                <SpeciesDropdown />
            </div>
            <div className="three columns">
                <strong>Carrer</strong>
                <CareerDropdown />
            </div>
            <div className="three columns">
                <strong>Specialization Trees</strong>
                <SpecializationDropdown />
            </div>
        </div>)
}

export default CharacterDescriptionPanel