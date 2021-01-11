import React, { ReactNode } from "react"

interface ColumnProps {
    type?: ColumnPropDef | ColumnPropDef[],
    narrow?: Narrow,
    children: ReactNode | ReactNode[]
}

export class ColumnPropDef {
    private size
    private isOffset
    private viewport

    constructor(size: Size, isOffset?: boolean, viewport?: Viewport) {
        this.size = size
        this.isOffset = isOffset
        this.viewport = viewport
    }

    public toString = () => {
        let value = "is"
        if (this.isOffset) {
            value = value + "-" + this.isOffset
        }
        value = value + "-" + this.size
        if (!this.isOffset && this.viewport) {
            value = value + "-" + this.viewport
        }

        return value
    }
}

export enum Viewport{
    isMobile = "mobile",
    isTablet = "tablet",
    isTouch = "touch",
    isDesktop = "desktop",
    isWidescreen = "widescreen",
    isFullHd = "fullhd"
}

export enum Size {
    isThreeQuarters = "is-three-quarters",
    isTwoThirds = "is-two-thirds",
    isHalf = "is-half",
    isOneThird = "is-one-third",
    isOneQuarter = "is-one-quarter",
    isFull = "is-full",
    isFourFifths = "is-four-fifths",
    isThreeFifths = "is-three-fifths",
    isTwoFifths = "is-two-fifths",
    isOneFifths = "is-one-fifth",
    isOne = "is-1",
    isTwo = "is-2",
    isThree = "is-3",
    isFour = "is-4",
    isFive = "is-5",
    isSix = "is-6",
    isSeven = "is-7",
    isEight = "is-8",
    isNine = "is-9",
    isTen = "is-10",
    isEleven = "is-11",
    isTwelve = "is-12"
}

export enum Narrow {
    isNarrow = "is-narrow",
    isNarrowMobile = "is-narrow-mobile",
    isNarrowTablet = "is-narrow-tablet",
    isNarrowTouch = "is-narrow-touch",
    isNarrowDesktop = "is-narrow-desktop",
    isNarrowWidescreen = "is-narrow-widescreen",
    isNarrowFullHd = "is-narrow-fullhd"
}

export enum Viewport {

}

export type ColumnElement = JSX.Element

const Column = (props: ColumnProps): ColumnElement => {
    let className = "column"
    if (props.type) {
        let types: ColumnPropDef[] = []
        types = types.concat(props.type)
        className = className.concat(" ")
        className = className.concat(types.join(" "))
    }
    if (props.narrow) {
        className = className.concat(" ")
        className = className.concat(props.narrow)
    }

    return (
        <div className={className}>{props.children}</div>
    )
}

export default Column