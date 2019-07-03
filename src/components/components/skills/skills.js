import React, { useContext } from "react"
import { CharState } from "../../contexts/characteristic-context"
import { NameplateState } from "../../contexts/nameplate-context"
import { SkillState, DispatchSkill } from "../../contexts/skills-context"

const SkillTable = () => {
    const nameState = useContext(NameplateState)
    const charState = useContext(CharState);
    const skillState = useContext(SkillState)
    const dispatch = useContext(DispatchSkill);

    const generalSkills = []

    

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
          <tr>
            <td>Astrogation</td>
            <td>Intelligence</td>
            <td>No</td>
            <td>2g</td>
            <td>1</td>
            <td></td>
          </tr>
          {/*Add dynamically populating json list here*/}
        </tbody>
      </table>
    )
}

export default SkillTable;