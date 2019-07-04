import React, { useContext } from "react"
import { NameplateState } from "../../contexts/nameplate-context"
import { CharState } from "../../contexts/characteristic-context"
import { SkillState, DispatchSkill } from "../../contexts/skills-context"

import { useSkills } from "../../../data/queries/skills-query"
import AbilityDie from "../../images/ability"
import ProficiencyDie from "../../images/proficiency"

const DiceRender = (characteristicLevel, skillLevel) => {
  const ability = Math.max(characteristicLevel, skillLevel) - Math.min(characteristicLevel, skillLevel)
  const proficiency = Math.max(characteristicLevel, skillLevel) - ability

  const diceDivs = []

  diceDivs.push(
    <div className="two columns" key='ability'>
      <label>{ability}</label>
    </div>)
  diceDivs.push(
    <div className="three columns" key='abilityDie'>
      <AbilityDie />
    </div>)

  if (proficiency > 0) {
    diceDivs.push(
      <div className="two columns" key='proficiency'>
        <label>{proficiency}</label>
      </div>)
    diceDivs.push(
      <div className="three columns" key='proficiencyDie'>
        <ProficiencyDie />
      </div>)
  }

  return (
    <div className="row">
      {diceDivs}
    </div>
  )
}

const SkillTable = () => {
  const nameState = useContext(NameplateState)
  const charState = useContext(CharState);
  const skillState = useContext(SkillState)
  const dispatch = useContext(DispatchSkill);
  const skills = useSkills();

  const generalSkillList = []

  skills.forEach(element => {
    const value = nameState.species.baseCharacterstics.find(baseChars => baseChars.key === element.characteristic).value
    const characteristic = value + charState['additional' + element.characteristic]

    generalSkillList.push(
      <tr key={element.key}>
        <td>{element.name}</td>
        <td>{element.characteristic}</td>
        <td>No</td>
        <td>{DiceRender(characteristic, skillState[element.key])}</td>
        <td>
          <select className="u-full-width" id="rankSelector" value={skillState[element.key]}
            onChange={(event) => dispatch({ type: element.key, value: event.target.value })}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
      </tr>)
  });



  return (
    <table className="u-full-width" description="Character Skills">
      <thead>
        <tr>
          <th>Skill</th>
          <th>Characteristic</th>
          <th>Career</th>
          <th>Roll</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {generalSkillList}
      </tbody>
    </table>
  )
}

export default SkillTable;