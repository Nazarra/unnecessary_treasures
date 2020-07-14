import React from "react";
import * as Scroll from 'react-scroll';
import {Link} from 'react-scroll'

function ScrollLink(props) {
   return(
    <>
        <li>
            <Link to={props.linkTarger}
                  smooth={true}
                  duration={500}
            >
                <a href={"/"}> {props.LinkName} </a>
            </Link>
        </li>
    </>
)}

export default ScrollLink;
