import React, { useContext } from "react"
import { CharState } from "../../contexts/characteristic-context"
import { SkillState, DispatchSkill } from "../../contexts/skills-context"
import { useSkills } from "../../../data/queries/skills-query"

const DiceRender = (characteristicLevel, skillLevel) => {
  return (
    <div className="row" description="Character Characteristics">
      
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
    generalSkillList.push(
      <tr key={element.key}>
        <td>{element.name}</td>
        <td>{element.characteristic}</td>
        <td>No</td>
        <td>2g</td>
        <td>
          <select className="u-full-width" id="rankSelector" value={state[element.key]}
           onChange={(event) => dispatch({ type: element.key, value: event.target.value })}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
        <td></td>
      </tr>)
  });



  return (
    <table className="u-full-width" description="Character Skills">
      <thead>
        <tr>
          <th>Skill</th>
          <th>Characteristic</th>
          <th>Carrer</th>
          <th>Roll</th>
          <th>Rank</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {generalSkillList}
      </tbody>
    </table>
  )
}

export default SkillTable;