import React, { useContext } from "react"
import { NameplateState, DispatchNamePlate, CHANGE_SPECIES, CHANGE_CARRER, CHANGE_SPECIALIZATION } from "../contexts/nameplate-context.js"
import { useCarrers } from "../../data/queries/carrer-query"

export const SpeciesDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);

    return (
        <select className="u-full-width" id="SpeciesSelector" value={state.species} onChange={(event) => dispatch({ type: CHANGE_SPECIES, value: event.target.value })}>
            <option key="Chiss" value="Chiss">Chiss</option>
            <option key="Human" value="Human">Human</option>
            <option key="Twi'lek" value="Twi'lek">Twi'lek</option>
        </select>
    )
}

export const CarrerDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);
    const carrers = useCarrers()

    const nodes = new Map()
    const options = []

    carrers.forEach(element => {
        nodes.set(element.node.carrer, element.node)
        options.push(<option key={element.node.carrer} value={element.node.carrer}>{element.node.carrer}</option>)
    });

    return (
        <select className="u-full-width" id="ClassDropdown" value={state.carrer.carrer} onChange={(event) => dispatch({ type: CHANGE_CARRER, value: nodes.get(event.target.value) })}>
            {options}
        </select>
    )
}

export const SpecializationDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);

    const options = []

    state.carrer.specializations.forEach(element => {
        options.push(<option key={element.specialization} value={element}>{element.specialization}</option>)
    });

    return (
        <select className="u-full-width" id="SpecializationDropdown" value={state.specialization} onChange={(event) => dispatch({ type: CHANGE_SPECIALIZATION, value: event.target.value })}>
            {options}
        </select>
    )
}