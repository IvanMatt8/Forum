import React from "react";
import Spinner from "../Spinner";
import "./index.css"

function Button({children, loading, ...rest}) {
    return(
       <button {...rest}> { loading  && <Spinner /> } {children} </button>
    )
}

export default Button