import React, { useContext } from "react"
import { NameplateState, DispatchNamePlate, CHANGE_SPECIES, CHANGE_CAREER, CHANGE_SPECIALIZATION } from "../contexts/nameplate-context.js"
import { useCareers } from "../../data/queries/career-query"

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

export const CareerDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);
    const carrers = useCareers()

    const nodes = new Map()
    const options = []

    carrers.forEach(element => {
        nodes.set(element.node.career, element.node)
        options.push(<option key={element.node.career} value={element.node.career}>{element.node.career}</option>)
    });

    return (
        <select className="u-full-width" id="ClassDropdown" value={state.career.career} onChange={(event) => dispatch({ type: CHANGE_CAREER, value: nodes.get(event.target.value) })}>
            {options}
        </select>
    )
}

export const SpecializationDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);

    const nodes = new Map()
    const options = []

    state.career.specializations.forEach(element => {
        nodes.set(element.specialization, element)
        options.push(<option key={element.specialization} value={element}>{element.specialization}</option>)
    });

    return (
        <select className="u-full-width" id="SpecializationDropdown" value={state.specialization} onChange={(event) => dispatch({ type: CHANGE_SPECIALIZATION, value: nodes.get(event.target.value) })}>
            {options}
        </select>
    )
}