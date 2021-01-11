import React, { ReactNode } from "react"
import { ColumnElement } from "./column"

interface ColumnsProps {
    type?: ColumnsPropDef | ColumnsPropDef[],
    children: ColumnElement | ReactNode[]
}

export enum ColumnsPropDef {
    isMobile = "is-mobile",
    isDesktop = "is-desktop",
    isGapless = "is-gapless",
    isMultiline = "is-multiline",
    isZero = "is-0",
    isOne = "is-1",
    isTwo = "is-2",
    isThree = "is-3",
    isFour = "is-4",
    isFive = "is-5",
    isSix = "is-6",
    isSeven = "is-7",
    isEight = "is-8",
    isVariable = "is-variable",
    isVCentered = "is-vcentered",
    isCentered = "is-centered"
}

const findVariableRequired = (type: ColumnsPropDef): boolean => {
    switch (type) {
        case ColumnsPropDef.isZero:
        case ColumnsPropDef.isOne:
        case ColumnsPropDef.isTwo:
        case ColumnsPropDef.isThree:
        case ColumnsPropDef.isFour:
        case ColumnsPropDef.isFive:
        case ColumnsPropDef.isSix:
        case ColumnsPropDef.isSeven:
        case ColumnsPropDef.isEight:
            return true
        default:
            return false
    }
}

const Columns = (props: ColumnsProps) => {
    let className = "columns"
    if (props.type) {
        let types: ColumnsPropDef[] = []
        types = types.concat(props.type)

        className = className.concat(" ")
        className = className.concat(types.join(" "))

        const isFound = types.find(findVariableRequired)

        if (isFound && !types.includes(ColumnsPropDef.isVariable)) {
            className = className.concat(" ")
            className = className.concat(ColumnsPropDef.isVariable)
        }
    }

    return (
        <div className={className}>{props.children}</div>
    )
}

export default Columns