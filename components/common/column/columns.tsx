import React, { ReactNode } from "react"

interface ColumnsProps {
    children: ReactNode | ReactNode[]
}

const Columns = (props: ColumnsProps) => {
    return(
        <div className="columns">{props.children}</div>
    )
}

export default Columns;