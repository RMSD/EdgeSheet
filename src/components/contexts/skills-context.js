import React, { useReducer } from react

/* Actions */
export const CHANGE_ASTROGATION = 'CHANGE_ASTROGATION'
export const CHANGE_ATHLETICS = 'CHANGE_ATHLETICS'
export const CHANGE_CHARM = 'CHANGE_CHARM'
export const CHANGE_COERCION = 'CHANGE_COERCION'
export const CHANGE_COMPUTERS = 'CHANGE_COMPUTERS'
export const CHANGE_COOL = 'CHANGE_COOL'
export const CHANGE_COORDINATION = 'CHANGE_COORDINATION'
export const CHANGE_DECEPTION = 'CHANGE_DECEPTION'
export const CHANGE_DISCIPLINE = 'CHANGE_DISCIPLINE'
export const CHANGE_LEADERSHIP = 'CHANGE_LEADERSHIP'
export const CHANGE_MECHANICS = 'CHANGE_MECHANICS'
export const CHANGE_MEDICINE = 'CHANGE_MEDICINE'
export const CHANGE_NEGOTIATION = 'CHANGE_NEGOTIATION'
export const CHANGE_PERCEPTION = 'CHANGE_PERCEPTION'
export const CHANGE_PILOTINGPLANETARY = 'CHANGE_PILOTINGPLANETARY'
export const CHANGE_PILOTINGSPACE = 'CHANGE_PILOTINGSPACE'
export const CHANGE_RESILIENCE = 'CHANGE_RESILIENCE'
export const CHANGE_SKULDUGGERY = 'CHANGE_SKULDUGGERY'
export const CHANGE_STEALTH = 'CHANGE_STEALTH'
export const CHANGE_STREETWISE = 'CHANGE_STREETWISE'
export const CHANGE_SURVIVAL = 'CHANGE_SURVIVAL'
export const CHANGE_VIGILANCE = 'CHANGE_VIGILANCE'

/* State Setup */
export const SkillState = React.createContext({});
export const DispatchSkill = React.createContext(() => null);

const initialState = {
    astrogation: 0,
    athletics: 0,
    charm: 0,
    coercion: 0,
    computers: 0,
    cool: 0,
    coordination: 0,
    deception: 0,
    discipline: 0,
    leadership: 0,
    mechanics: 0,
    medicine: 0,
    negotiation: 0,
    perception: 0,
    pilotingPlanetary: 0,
    pilotingSpace: 0,
    resilience: 0,
    skulduggery: 0,
    stealth: 0,
    streetwise: 0,
    survival: 0,
    vigilance: 0
};

/* Reducer */
const reducer = (state, action) => {
    const newState = Object.assign({}, state)

    if (Number.isNaN(action.value) || action.value < 0) {
        action.value = 0
    } else if  (action.value > 5) {
        action.value = 5
    }

    switch (action.type) {
        case CHANGE_ASTROGATION:
        case CHANGE_ATHLETICS:
        case CHANGE_CHARM:
        case CHANGE_COERCION:
        case CHANGE_COMPUTERS:
        case CHANGE_COOL:
        case CHANGE_COORDINATION:
        case CHANGE_DECEPTION:
        case CHANGE_DISCIPLINE:
        case CHANGE_LEADERSHIP:
        case CHANGE_MECHANICS:
        case CHANGE_MEDICINE:
        case CHANGE_NEGOTIATION:
        case CHANGE_PERCEPTION:
        case CHANGE_PILOTINGPLANETARY:
        case CHANGE_PILOTINGSPACE:
        case CHANGE_RESILIENCE:
        case CHANGE_SKULDUGGERY:
        case CHANGE_STEALTH:
        case CHANGE_STREETWISE:
        case CHANGE_SURVIVAL:
        case CHANGE_VIGILANCE:
            if (action.raw) {
                initialState[action.raw] = action.value
            }
            break;
        default:
            break;
    }

    return newState
}

/* Wrapper */
const SkillStateWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DispatchSkill.Provider value={dispatch}>
            <SkillState.Provider value={state}>
                {children}
            </SkillState.Provider>
        </DispatchSkill.Provider>
    )
}

export default SkillStateWrapper
