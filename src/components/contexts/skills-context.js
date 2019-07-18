import React, { useReducer } from "react"

/* Actions */
export const CHANGE_BASE = 'CHANGE_BASE'
export const CHANGE_BONUS = 'CHANGE_BONUS'

/* State Setup */
export const SkillState = React.createContext({});
export const DispatchSkill = React.createContext(() => null);

const initialState = {
    generalSkills: {
        "Astrogation": {
            skill: 0,
            isCarrer: false,
        },
        "Athletics": {
            skill: 0,
            isCarrer: false,
        },
        "Charm": {
            skill: 0,
            isCarrer: false,
        },
        "Coercion": {
            skill: 0,
            isCarrer: false,
        },
        "Computers": {
            skill: 0,
            isCarrer: false,
        },
        "Cool": {
            skill: 0,
            isCarrer: false,
        },
        "Coordination": {
            skill: 0,
            isCarrer: false,
        },
        "Deception": {
            skill: 0,
            isCarrer: false,
        },
        "Discipline": {
            skill: 0,
            isCarrer: false,
        },
        "Leadership": {
            skill: 0,
            isCarrer: false,
        },
        "Mechanics": {
            skill: 0,
            isCarrer: false,
        },
        "Medicine": {
            skill: 0,
            isCarrer: false,
        },
        "Negotiation": {
            skill: 0,
            isCarrer: false,
        },
        "Perception": {
            skill: 0,
            isCarrer: false,
        },
        "Piloting (Planetary)": {
            skill: 0,
            isCarrer: false,
        },
        "Piloting (Space)": {
            skill: 0,
            isCarrer: false,
        },
        "Resilience": {
            skill: 0,
            isCarrer: false,
        },
        "Skulduggery": {
            skill: 0,
            isCarrer: false,
        },
        "Stealth": {
            skill: 0,
            isCarrer: false,
        },
        "Streetwise": {
            skill: 0,
            isCarrer: false,
        },
        "Survival": {
            skill: 0,
            isCarrer: false,
        },
        "Vigilance": {
            skill: 0,
            isCarrer: false,
        }
    },
    bonusSkills: ["Melee", "Ranged (Heavy)", "Skulduggery", "Stealth"],
    activeBonusSkills: 0
};
const setCarrer = (value, key, skillList) => {
    if (skillList.includes(key)) {
        value.isCarrer = true;
    } else {
        value.isCarrer = false
    }
}
/* Reducer */
const reducer = (state, action) => {
    const newState = Object.assign({}, state)

    if (Number.isNaN(action.value) || action.value < 0) {
        action.value = 0
    } else if (action.value > 5) {
        action.value = 5
    }

    if (action.type === CHANGE_BASE) {
        newState.generalSkills.forEach((value, key, _map) => setCarrer(value, key, action.value));
        // set other skill types here
        newState.bonusSkills = action.bonusSkills
        newState.activeBonusSkills = 0
    } if (action.type === CHANGE_BONUS) {
        let skill = newState.generalSkills.get(action.value)
        // test other skill types here
        if (typeof myVar !== 'undefined') {
            skill.isCarrer = action.carrerState;
            newState.activeBonusSkills = skill.isCarrer == true ? newState.activeBonusSkills++ : newState.activeBonusSkills--
        }
    } else if (action.type) {
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
