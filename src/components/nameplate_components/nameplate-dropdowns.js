import React, { useContext } from "react"
import {NameplateState, DispatchNamePlate, CHANGE_SPECIES} from "../contexts/nameplate-context.js"

const SpeciesDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);

    return (
    <select class="u-full-width" id="SpeciesSelector" value={state.species} onChange={(event) => dispatch({type: CHANGE_SPECIES, value: event.target.value})}>
        <option value="Human">Human</option>
        <option value="Chiss">Chiss</option>
        <option value="Twi'lek">Twi'lek</option>
    </select>
    )
}
export default SpeciesDropdown