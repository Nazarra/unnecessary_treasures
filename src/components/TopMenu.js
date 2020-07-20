import React from "react";

import LinkedButton from "./LinkedButton";
import ScrollLink from "./ScrollLink";

const TopMenu = () =>{
    return(
        <><div className={"top_menu"}>
                <div className={"login_and_register_container"}>
                    <LinkedButton linkTarget={'/logIn'} buttonClassName={"register_and_login_button login"} buttonContent={"Zaloguj"} />
                    <LinkedButton linkTarget={'/register'} buttonClassName={"register_and_login_button register"} buttonContent={"Załóż konto"} />
                </div>
                <nav className={"navigation"}>
                    <ul>
                        <ScrollLink linkTarget={"Header"}  LinkName={"Start"} />
                        <ScrollLink linkTarget={"HomeSimpleSteps"} LinkName={"O co chodzi?"} />
                        <ScrollLink linkTarget={"About_Us"} LinkName={"o nas"} />
                        <ScrollLink linkTarget={"who_we_help"} LinkName={"Fundacja i organizacje"} />
                        <ScrollLink linkTarget={"contact"} LinkName={"Kontakt"} />
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default TopMenu