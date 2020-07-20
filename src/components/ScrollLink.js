import React from "react";
import {Link} from 'react-scroll'

function ScrollLink(props) {
   return(
    <>
        <li>
            <div>
                <Link to={props.linkTarget}
                      smooth={true}
                      duration={500}
                >
                    <a href={"/"}> {props.LinkName} </a>
                </Link>
            </div>
        </li>
    </>
)}

export default ScrollLink;
