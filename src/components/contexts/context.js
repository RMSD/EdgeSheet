import React, { useReducer } from "react"

/* Actions */
export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_SPECIES = 'CHANGE_SPECIES'
export const CHANGE_CAREER = 'CHANGE_CAREER'
export const CHANGE_SPECIALIZATION = 'CHANGE_SPECIALIZATION'
export const CHANGE_BRAWN = 'CHANGE_BRAWN'
export const CHANGE_AGILITY = 'CHANGE_AGILITY'
export const CHANGE_INTELLECT = 'CHANGE_INTELLECT'
export const CHANGE_CUNNING = 'CHANGE_CUNNING'
export const CHANGE_WILLPOWER = 'CHANGE_WILLPOWER'
export const CHANGE_PRESENCE = 'CHANGE_PRESENCE'

/* State Setup */
export const State = React.createContext({});
export const Dispatch = React.createContext(() => null);

const initialState = {
    name: "Default Name",
    species: "Human",
    career: {
        specializations: []
    },
    specialization: {},
    additionalBrawn: 0,
    additionalAgility: 0,
    additionalIntellect: 0,
    additionalCunning: 0,
    additionalWillpower: 0,
    additionalPresence: 0
};

/* Reducer */
const reducer = (state, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case CHANGE_NAME:
            newState.name = action.value;
            break;
        case CHANGE_SPECIES:
            newState.species = action.value;
            break;
        case CHANGE_CAREER:
            newState.career = action.value;
            break;
        case CHANGE_SPECIALIZATION:
            newState.specialization = action.value;
            break;
        case CHANGE_BRAWN:
            newState.additionalBrawn += action.value;
            break;
        case CHANGE_AGILITY:
            newState.additionalAgility += action.value;
            break;
        case CHANGE_INTELLECT:
            newState.additionalIntellect += action.value;
            break;
        case CHANGE_CUNNING:
            newState.additionalCunning += action.value;
            break;
        case CHANGE_WILLPOWER:
            newState.additionalWillpower += action.value;
            break;
        case CHANGE_PRESENCE:
            newState.additionalPresence += action.value;
            break;
        default:
            break;
    }

    return newState
}

/* Wrapper */
const StateWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Dispatch.Provider value={dispatch}>
            <State.Provider value={state}>
                {children}
            </State.Provider>
        </Dispatch.Provider>
    )
}

export default StateWrapper
