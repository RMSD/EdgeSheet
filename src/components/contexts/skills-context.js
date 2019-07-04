import React, { useReducer } from "react"

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
    } else if (action.value > 5) {
        action.value = 5
    }

    if (action.type) {
        newState[action.type] = action.value
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
