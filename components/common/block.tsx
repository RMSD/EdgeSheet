import React, { ReactNode } from "react"

interface BlockProps {
    type?: BlockPropDef,
    isPrimary?: boolean,
    children: ReactNode | ReactNode[]
}

export enum BlockPropDef {
    widescreen = "is-widescreen",
    notification = "notification",
    fullHd = "is-fullhd",
    primary = "is-primary",
    maxDesktop = "is-max-desktop",
    maxFullScreen = "is-max-widescreen",
    fluid = "is-fluid"
}

const GenerateClassName = (props: BlockProps) => {
    let className = ""

    if (props.type === BlockPropDef.notification) {
        className = className + BlockPropDef.notification
        if (props.isPrimary === true) {
            className = className + " " + BlockPropDef.primary
        }
    } else if (props.type !== undefined) {
        className = "container " + props.type
    } else {
        className = "container"
    }

    return className;
}

const Block = (props: BlockProps) => {
    return (
        <div className={GenerateClassName(props)}>{props.children}</div>
    )
}

export default Block