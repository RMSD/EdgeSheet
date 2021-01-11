import React from "react"

import Column from "./common/column/column"
import Columns from "./common/column/columns"

interface HeaderProps {
    brawn: number,
    agility: number,
    intellect: number,
    cunning: number,
    willpower: number,
    presence: number
}

const Header = (props: HeaderProps) => {
    return (
        <Columns>
            <Column>
                test
            </Column>
            <Column>
                test2
            </Column>
        </Columns>
    )
}

export default Header