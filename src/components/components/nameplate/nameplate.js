import React, { useContext } from "react"
import { SpeciesDropdown, CareerDropdown, SpecializationDropdown } from "./nameplate-dropdowns"
import { NameplateState, DispatchNamePlate, CHANGE_NAME } from "../../contexts/nameplate-context"

const CharacterDescriptionPanel = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);

    return (
        <div className="columns" description="Character Information">
            <div className="column">
                <strong>Character Name</strong>
                <input className="input" type="text" value={state.name}
                    onChange={(event) => dispatch({ type: CHANGE_NAME, value: event.target.value })} id="characterName" />
            </div>
            <div className="column">
                <strong>Species</strong>
                <br />
                <SpeciesDropdown />
            </div>
            <div className="column">
                <strong>Career</strong>
                <br />
                <CareerDropdown />
            </div>
            <div className="column">
                <strong>Specialization Trees</strong>
                <br />
                <SpecializationDropdown />
            </div>
        </div>)
}

export default CharacterDescriptionPanel