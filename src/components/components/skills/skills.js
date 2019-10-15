import React, { useContext } from "react"
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
    <div className="column is-2 is-narrow" key='ability'>
      <strong>{ability}</strong>
    </div>)
  diceDivs.push(
    <div className="column is-2 is-narrow" key='abilityDie'>
      <AbilityDie />
    </div>)
  diceDivs.push(<div className="column is-1" key='gap' />)

  if (proficiency > 0) {
    diceDivs.push(
      <div className="column is-2 is-narrow" key='proficiency'>
        <strong>{proficiency}</strong>
      </div>)
    diceDivs.push(
      <div className="column is-2 is-narrow" key='proficiencyDie'>
        <ProficiencyDie />
      </div>)
  }

  return (
    <div className="columns is-gapless">
      {diceDivs}
    </div>
  )
}

const SkillTable = () => {
  const charState = useContext(CharState);
  const skillState = useContext(SkillState)
  const dispatch = useContext(DispatchSkill);
  const skills = useSkills();

  const generalSkillList = []

  skills.forEach(element => {
    const characteristic = charState['base' + element.characteristic] + charState['additional' + element.characteristic]

    const skill = skillState.generalSkills.get(element.name)

    generalSkillList.push(
      <tr key={element.name}>
        <td>{element.name}</td>
        <td>{element.characteristic}</td>
        <td>No</td>
        <td>{DiceRender(characteristic, skill.skill)}</td>
        <td>
          <div className="select">
            <select id="rankSelector" value={skill.skill}
              onChange={(event) => dispatch({ type: element.name, value: event.target.value })}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </td>
      </tr>)
  });



  return (
    <table className="table is-fullwidth">
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