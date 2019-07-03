import React, { useContext } from "react"
import { NameplateState, DispatchNamePlate, CHANGE_SPECIES, CHANGE_CAREER, CHANGE_SPECIALIZATION } from "../../contexts/nameplate-context"
import { useCareers } from "../../../data/queries/career-query"
import { useSpecies } from "../../../data/queries/species-query"

const sort = (x, y) => {
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
}

export const SpeciesDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);
    const species = useSpecies()

    species.sort((a, b) => {
        return sort(a.name.toLowerCase(), b.name.toLowerCase())
    })

    const nodes = new Map()
    const options = []

    species.forEach(element => {
        nodes.set(element.name, element)
        options.push(<option key={element.name} value={element.name}>{element.name}</option>)
    });

    return (
        <select className="u-full-width" id="SpeciesSelector" value={state.species.name}
            onChange={(event) => dispatch({ type: CHANGE_SPECIES, value: nodes.event.target.value })}>
            {options}
        </select>
    )
}

export const CareerDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);
    const carrers = useCareers()

    carrers.sort((a, b) => {
        return sort(a.career.toLowerCase(), b.career.toLowerCase())
    })

    const nodes = new Map()
    const options = []

    carrers.forEach(element => {
        nodes.set(element.career, element)
        options.push(<option key={element.career} value={element.career}>{element.career}</option>)
    });

    return (
        <select className="u-full-width" id="ClassDropdown" value={state.career.career}
            onChange={(event) => dispatch({ type: CHANGE_CAREER, value: nodes.get(event.target.value) })}>
            {options}
        </select>
    )
}

export const SpecializationDropdown = () => {
    const state = useContext(NameplateState);
    const dispatch = useContext(DispatchNamePlate);
    const specializations = state.career.specializations

    const nodes = new Map()
    const options = []

    specializations.sort((a, b) => {
        return sort(a.name.toLowerCase(), b.name.toLowerCase())
    })

    specializations.forEach(element => {
        nodes.set(element.name, element)
        options.push(<option key={element.name} value={element.name}>{element.name}</option>)
    });

    return (
        <select className="u-full-width" id="SpecializationDropdown" value={state.specialization.name}
            onChange={(event) => dispatch({ type: CHANGE_SPECIALIZATION, value: nodes.get(event.target.value) })}>
            {options}
        </select>
    )
}