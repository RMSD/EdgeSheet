import React, { useReducer } from "react"

/* Actions */
export const CHANGE_BRAWN = 'CHANGE_BRAWN'
export const CHANGE_AGILITY = 'CHANGE_AGILITY'
export const CHANGE_INTELLIGENCE = 'CHANGE_INTELLIGENCE'
export const CHANGE_CUNNING = 'CHANGE_CUNNING'
export const CHANGE_WILLPOWER = 'CHANGE_WILLPOWER'
export const CHANGE_PRESENCE = 'CHANGE_PRESENCE'
export const CHANGE_SOAK = 'CHANGE_SOAK'
export const CHANGE_MELEEDEF = 'CHANGE_MELEEDEF'
export const CHANGE_RANGEDDEF = 'CHANGE_RANGEDDEF'
export const CHANGE_BASE = 'CHANGE_BASE'

/* State Setup */
export const CharState = React.createContext({});
export const DispatchChar = React.createContext(() => null);

const initialState = {
    baseBrawn: 2,
    additionalBrawn: 0,
    baseAgility: 2,
    additionalAgility: 0,
    baseIntelligence: 2,
    additionalIntelligence: 0,
    baseCunning: 2,
    additionalCunning: 0,
    baseWillpower: 2,
    additionalWillpower: 0,
    basePresence: 2,
    additionalPresence: 0,
    soak: 0,
    defenseMelee: 0,
    defenseRanged: 0,
    baseWounds: 10,
    woundCharacterstic: "Brawn",
    baseStrain: 10,
    strainCharacterstic: "Willpower"
};

/* Reducer */
const reducer = (state, action) => {
    const newState = Object.assign({}, state)

    if (Number.isNaN(action.value) || action.value < 0) {
        action.value = 0
    }

    switch (action.type) {
        case CHANGE_BRAWN:
            newState.additionalBrawn = action.value;
            break;
        case CHANGE_AGILITY:
            newState.additionalAgility = action.value;
            break;
        case CHANGE_INTELLIGENCE:
            newState.additionalIntelligence = action.value;
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
        case CHANGE_BASE:
            action.baseCharacterstics.forEach(element => {
                newState["base" + element.key] = element.value
                
            });
            newState.baseWounds = action.baseWounds
            newState.baseStrain = action.baseStrain
            newState.woundCharacterstic = action.woundCharacterstic
            newState.strainCharacterstic = action.strainCharacterstic
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
