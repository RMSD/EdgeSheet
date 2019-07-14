import React, { useReducer } from "react"

/* State Setup */
export const SkillState = React.createContext({});
export const DispatchSkill = React.createContext(() => null);

const initialState = {
    astrogation: 0,
    isAstrogationCareer: false,
    athletics: 0,
    isAthleticsCareer: false,
    charm: 0,
    isCharmCareer: false,
    coercion: 0,
    isCoercionCareer: false,
    computers: 0,
    isComputesCareer: false,
    cool: 0,
    isCoolCareer: false,
    coordination: 0,
    isCoordinationCareer: false,
    deception: 0,
    isDeceptionCareer: false,
    discipline: 0,
    isDisciplineCareer: false,
    leadership: 0,
    isLeadershipCareer: false,
    mechanics: 0,
    isMechanicsCareer: false,
    medicine: 0,
    isMedicineCareer: false,
    negotiation: 0,
    isNegotiationCareer: false,
    perception: 0,
    isPerceptionCareer: false,
    pilotingPlanetary: 0,
    isPilotingPlanetaryCareer: false,
    pilotingSpace: 0,
    isPilotingSpaceCareer: false,
    resilience: 0,
    isResilienceCareer: false,
    skulduggery: 0,
    isSkulduggeryCareer: false,
    stealth: 0,
    isStealthCareer: false,
    streetwise: 0,
    isStreetwiseCareer: false,
    survival: 0,
    isSurvivalCareer: false,
    vigilance: 0,
    isVigilanceCareer: false,
    bonusSkills: ["Melee", "Ranged (Heavy)", "Skulduggery", "Stealth"]
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
