import React from "react";

function FunctionButton(props) {
return(
    <>
        <button className={props.buttonClassName} onClick={props.buttonFunction}>
            {props.buttonText}
        </button>
    </>
)
}

export default FunctionButton;