import React, { useReducer } from "react"

/* Actions */
export const CHANGE_BRAWN = 'CHANGE_BRAWN'
export const CHANGE_AGILITY = 'CHANGE_AGILITY'
export const CHANGE_INTELLECT = 'CHANGE_INTELLECT'
export const CHANGE_CUNNING = 'CHANGE_CUNNING'
export const CHANGE_WILLPOWER = 'CHANGE_WILLPOWER'
export const CHANGE_PRESENCE = 'CHANGE_PRESENCE'
export const CHANGE_SOAK = 'CHANGE_SOAK'
export const CHANGE_MELEEDEF = 'CHANGE_MELEEDEF'
export const CHANGE_RANGEDDEF = 'CHANGE_RANGEDDEF'

/* State Setup */
export const CharState = React.createContext({});
export const DispatchChar = React.createContext(() => null);

const initialState = {
    additionalBrawn: 0,
    additionalAgility: 0,
    additionalIntellect: 0,
    additionalCunning: 0,
    additionalWillpower: 0,
    additionalPresence: 0,
    soak: 0,
    defenseMelee: 0,
    defenseRanged: 0
};

/* Reducer */
const reducer = (state, action) => {
    const newState = Object.assign({}, state)

    if (Number.isNaN(action.value) || action.value < 0) {
        action.value = 0
    }



    console.log(action)

    switch (action.type) {
        case CHANGE_BRAWN:
            newState.additionalBrawn = action.value;
            break;
        case CHANGE_AGILITY:
            newState.additionalAgility = action.value;
            break;
        case CHANGE_INTELLECT:
            newState.additionalIntellect = action.value;
            break;
        case CHANGE_CUNNING:
            newState.additionalCunning = action.value;
            break;
        case CHANGE_WILLPOWER:
            newState.additionalWillpower = action.value;
            break;
        case CHANGE_PRESENCE:
            newState.additionalPresence = action.value;
            break;
        case CHANGE_SOAK:
            newState.soak = action.value;
            break;
        case CHANGE_MELEEDEF:
            newState.defenseMelee = action.value;
            break;
        case CHANGE_RANGEDDEF:
            newState.defenseRanged = action.value;
            break;
        default:
            break;
    }

    return newState
}

/* Wrapper */
const CharacteristicStateWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DispatchChar.Provider value={dispatch}>
            <CharState.Provider value={state}>
                {children}
            </CharState.Provider>
        </DispatchChar.Provider>
    )
}

export default CharacteristicStateWrapper
