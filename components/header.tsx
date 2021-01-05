import React from "react"
import Block, {BlockPropDef} from "./common/block"

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
        <Block>
            <Block type={BlockPropDef.notification} isPrimary>test</Block>
            <Block type={BlockPropDef.notification} isPrimary>test2</Block>
        </Block>
    )
}

export default Header;