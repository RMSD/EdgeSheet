import React, { useReducer } from "react"

/* Actions */
export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_SPECIES = 'CHANGE_SPECIES'
export const CHANGE_CAREER = 'CHANGE_CAREER'
export const CHANGE_SPECIALIZATION = 'CHANGE_SPECIALIZATION'

/* State Setup */
export const NameplateState = React.createContext({});
export const DispatchNamePlate = React.createContext(() => null);

const initialState = {
    name: "Default Name",
    species: {
        name: "Human",
        baseCharacterstics: [{
            key: "Brawn",
            value: 2
        },
        {
            key: "Agility",
            value: 2
        },
        {
            key: "Intellect",
            value: 2
        },
        {
            key: "Cunning",
            value: 2
        },
        {
            key: "Willpower",
            value: 2
        },
        {
            key: "Presence",
            value: 2
        }],
        baseWounds: 10,
        woundCharacterstic: "Brawn",
        baseStrain: 10,
        strainCharacterstic: "Willpower",
        speciesFeat: "1 rank in any 2 non-career skills",
        sourceBook: "Edge of the Empire"
    },
    career: {
        career: "Bounty Hunter",
        careerSkills: ["Athletics", "Brawl", "Perception", "Piloting (Planetary)", "Piloting (Space)", "Ranged (Heavy)", "Streetwise", "Vigilance"],
        specializations: [
            {
                name: "Assassin",
                bonusSkills: ["Melee", "Ranged (Heavy)", "Skulduggery", "Stealth"],
                sourceBook: "Edge of the Empire Source Book P."
            }
        ]
    },
    specialization: {
        name: "Assassin",
        bonusSkills: ["Melee", "Ranged (Heavy)", "Skulduggery", "Stealth"],
        sourceBook: "Edge of the Empire Source Book P."
    }
};

/* Reducer */
export const reducer = (state, action) => {
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
        default:
            break;
    }
    return newState
}

/* Wrapper */
const NameplateStateWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DispatchNamePlate.Provider value={dispatch}>
            <NameplateState.Provider value={state}>
                {children}
            </NameplateState.Provider>
        </DispatchNamePlate.Provider>
    )
}

export default NameplateStateWrapper
