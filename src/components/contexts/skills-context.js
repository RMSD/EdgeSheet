import React, { useReducer } from "react"

/* State Setup */
export const SkillState = React.createContext({});
export const DispatchSkill = React.createContext(() => null);

const initialState = {
    generalSkills: {
        "astrogation": {
            skill: 0,
            isCarrer: false,
        },
        "athletics": {
            skill: 0,
            isCarrer: false,
        },
        "charm": {
            skill: 0,
            isCarrer: false,
        },
        "coercion": {
            skill: 0,
            isCarrer: false,
        },
        "computers": {
            skill: 0,
            isCarrer: false,
        },
        "cool": {
            skill: 0,
            isCarrer: false,
        },
        "coordination": {
            skill: 0,
            isCarrer: false,
        },
        "deception": {
            skill: 0,
            isCarrer: false,
        },
        "discipline": {
            skill: 0,
            isCarrer: false,
        },
        "leadership": {
            skill: 0,
            isCarrer: false,
        },
        "mechanics": {
            skill: 0,
            isCarrer: false,
        },
        "medicine": {
            skill: 0,
            isCarrer: false,
        },
        "negotiation": {
            skill: 0,
            isCarrer: false,
        },
        "perception": {
            skill: 0,
            isCarrer: false,
        },
        "pilotingPlanetary": {
            skill: 0,
            isCarrer: false,
        },
        "pilotingSpace": {
            skill: 0,
            isCarrer: false,
        },
        "resilience": {
            skill: 0,
            isCarrer: false,
        },
        "skulduggery": {
            skill: 0,
            isCarrer: false,
        },
        "stealth": {
            skill: 0,
            isCarrer: false,
        },
        "streetwise": {
            skill: 0,
            isCarrer: false,
        },
        "survival": {
            skill: 0,
            isCarrer: false,
        },
        "vigilance": {
            skill: 0,
            isCarrer: false,
        }
    },
    bonusSkills: ["Melee", "rangedHeavy", "Skulduggery", "Stealth"]
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
