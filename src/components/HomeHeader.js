import React, {useState} from "react";
import LinkedButton from "./LinkedButton";
import ScrollLink from "./ScrollLink";

const HomeHeader = () => {


    return (
        <>
            <header className={"homeHeader"}>
                <div className={"header_Image"}></div>
                    <section className={"Header_Content"}>
                        <div className={"top_menu"}>
                            <div className={"login_and_register_container"}>
                                <LinkedButton linkTarget={'/logIn'} buttonClassName={"register_and_login_button login"} buttonContent={"Zaloguj"} />
                                <LinkedButton linkTarget={'/register'} buttonClassName={"register_and_login_button register"} buttonContent={"Załóż konto"} />
                            </div>
                                <nav className={"navigation"}>
                                    <ul>
                                       <ScrollLink linkTarger={"..."} LinkName={"Start"} />
                                        <ScrollLink linkTarger={"..."} LinkName={"O co chodzi?"} />
                                        <ScrollLink linkTarger={"..."} LinkName={"o nas"} />
                                        <ScrollLink linkTarger={"..."} LinkName={"Fundacja i organizacje"} />
                                        <ScrollLink linkTarger={"..."} LinkName={"Kontakt"} />
                                    </ul>
                                </nav>
                        </div>
                        <div className={"intro"}>
                            <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <div className={"intro_content"}>
                                <LinkedButton linkTarget={'/logIn'} buttonClassName={"intro_button give"} buttonContent={"ODDAJ RZECZY"} />
                                <LinkedButton linkTarget={'/logIn'} buttonClassName={"intro_button collection"} buttonContent={"ZORGANIZUJ ZBIÓRKĘ"} />
                            </div>
                        </div>
                     </section>
            </header>
        </>
    );
};
export default HomeHeader;