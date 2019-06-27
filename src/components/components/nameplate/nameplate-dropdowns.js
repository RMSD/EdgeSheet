import React, { useContext } from "react"
import { State, Dispatch, CHANGE_SPECIES, CHANGE_CAREER, CHANGE_SPECIALIZATION } from "../../contexts/context"
import { useCareers } from "../../../data/queries/career-query"
import { useSpecies } from "../../../data/queries/species-query"

const sort = (x, y) => {
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
}

export const SpeciesDropdown = () => {
    const state = useContext(State);
    const dispatch = useContext(Dispatch);
    const species = useSpecies()

    species.sort((a, b) => {
        return sort(a.node.name.toLowerCase(), b.node.name.toLowerCase())
    })

    const nodes = new Map()
    const options = []

    species.forEach(element => {
        nodes.set(element.node.name, element.node)
        options.push(<option key={element.node.name} value={element.node.name}>{element.node.name}</option>)
    });

    return (
        <select className="u-full-width" id="SpeciesSelector" value={state.species.name}
            onChange={(event) => dispatch({ type: CHANGE_SPECIES, value: nodes.event.target.value })}>
            {options}
        </select>
    )
}

export const CareerDropdown = () => {
    const state = useContext(State);
    const dispatch = useContext(Dispatch);
    const carrers = useCareers()

    carrers.sort((a, b) => {
        return sort(a.node.career.toLowerCase(), b.node.career.toLowerCase())
    })

    const nodes = new Map()
    const options = []

    carrers.forEach(element => {
        nodes.set(element.node.career, element.node)
        options.push(<option key={element.node.career} value={element.node.career}>{element.node.career}</option>)
    });

    return (
        <select className="u-full-width" id="ClassDropdown" value={state.career.career}
            onChange={(event) => dispatch({ type: CHANGE_CAREER, value: nodes.get(event.target.value) })}>
            {options}
        </select>
    )
}

export const SpecializationDropdown = () => {
    const state = useContext(State);
    const dispatch = useContext(Dispatch);
    const specializations = state.career.specializations

    const nodes = new Map()
    const options = []

    specializations.sort((a, b) => {
        return sort(a.specialization.toLowerCase(), b.specialization.toLowerCase())
    })

    specializations.forEach(element => {
        nodes.set(element.specialization, element)
        options.push(<option key={element.specialization} value={element.specialization}>{element.specialization}</option>)
    });

    return (
        <select className="u-full-width" id="SpecializationDropdown" value={state.specialization}
            onChange={(event) => dispatch({ type: CHANGE_SPECIALIZATION, value: nodes.get(event.target.value) })}>
            {options}
        </select>
    )
}