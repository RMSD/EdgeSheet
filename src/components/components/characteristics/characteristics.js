import React, { useContext } from "react"
import { State, Dispatch } from "../../contexts/context"


const CharacteristicDescriptionPanel = () => {
    const state = useContext(State);
    const dispatch = useContext(Dispatch);

    return (
        <div className="row">
            <div className="three columns">
                <strong>Soak</strong>
                <p>0</p>
            </div>
            <div className="three columns">
                <strong>Wounds Maximum</strong>
                <p>10</p>
            </div>
            <div className="three columns">
                <strong>Strain Maximum</strong>
                <p>10</p>
            </div>
            <div className="three columns">
                <strong>Defense Maximum</strong>
                <p>0</p>
            </div>
        </div>)
}

export default CharacterDescriptionPanel