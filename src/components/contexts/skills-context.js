import React, { useReducer } from "react"

/* Actions */
export const CHANGE_BASE_SKILLS = 'CHANGE_BASE_SKILLS'
export const CHANGE_BONUS = 'CHANGE_BONUS'

/* State Setup */
export const SkillState = React.createContext({});
export const DispatchSkill = React.createContext(() => null);

const initialState = {
    generalSkills: new Map([
        ["Astrogation", {
            skill: 0,
            isCareer: false,
        }],
        ["Athletics", {
            skill: 0,
            isCareer: false,
        }],
        ["Charm", {
            skill: 0,
            isCareer: false,
        }],
        ["Coercion", {
            skill: 0,
            isCareer: false,
        }],
        ["Computers", {
            skill: 0,
            isCareer: false,
        }],
        ["Cool", {
            skill: 0,
            isCareer: false,
        }],
        ["Coordination", {
            skill: 0,
            isCareer: false,
        }],
        ["Deception", {
            skill: 0,
            isCareer: false,
        }],
        ["Discipline", {
            skill: 0,
            isCareer: false,
        }],
        ["Leadership", {
            skill: 0,
            isCareer: false,
        }],
        ["Mechanics", {
            skill: 0,
            isCareer: false,
        }],
        ["Medicine", {
            skill: 0,
            isCareer: false,
        }],
        ["Negotiation", {
            skill: 0,
            isCareer: false,
        }],
        ["Perception", {
            skill: 0,
            isCareer: false,
        }],
        ["Piloting (Planetary)", {
            skill: 0,
            isCareer: false,
        }],
        ["Piloting (Space)", {
            skill: 0,
            isCareer: false,
        }],
        ["Resilience", {
            skill: 0,
            isCareer: false,
        }],
        ["Skulduggery", {
            skill: 0,
            isCareer: false,
        }],
        ["Stealth", {
            skill: 0,
            isCareer: false,
        }],
        ["Streetwise", {
            skill: 0,
            isCareer: false,
        }],
        ["Survival", {
            skill: 0,
            isCareer: false,
        }],
        ["Vigilance", {
            skill: 0,
            isCareer: false,
        }]
    ]),
    bonusSkills: ["Melee", "Ranged (Heavy)", "Skulduggery", "Stealth"],
    activeBonusSkills: 0
};
const setCareer = (value, key, skillList) => {
    if (skillList.includes(key)) {
        value.isCareer = true;
    } else {
        value.isCareer = false
    }
}
/* Reducer */
const reducer = (state, action) => {
    var newState = Object.assign({}, state)

    if (Number.isNaN(action.value) || action.value < 0) {
        action.value = 0
    } else if (action.value > 5) {
        action.value = 5
    }

    if (action.type === CHANGE_BASE_SKILLS) {
        if (typeof action.value !== 'undefined') {
            newState = Object.assign({}, initialState)
            newState.generalSkills.forEach((value, key, _map) => setCareer(value, key, action.value));
        }
        // set other skill types here
        if (typeof action.bonusSkills !== 'undefined') {
            state.bonusSkills.forEach((skill) => {
                if (newState.generalSkills.get(skill)) {
                    newState.generalSkills.get(skill).isCareer = false
                }
            })
            newState.bonusSkills = action.bonusSkills
            newState.activeBonusSkills = 0
        }
    } else if (action.type === CHANGE_BONUS) {
        let skill = newState.generalSkills.get(action.value)
        // test other skill types here
        if (typeof skill !== 'undefined') {
            skill.isCareer = action.careerState;
            newState.activeBonusSkills = skill.isCareer === true ? newState.activeBonusSkills++ : newState.activeBonusSkills--
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
