import React from "react";
import "./BotonClear.css"

const BotonClear = (props) => {
    return (
        <div className="botonClear" onClick={props.mClear}>
            {props.children}
        </div>
    )
   
}

export default BotonClear