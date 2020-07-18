import React from "react";
import {Link} from 'react-router-dom';

const LinkedButton = (props) => {
    return(
        <>
             <Link to={props.linkTarget} className={props.buttonClassName}>
                 <div>
                     {props.buttonContent}
                 </div>
             </Link>
        </>
    )

}

export default LinkedButton;
