import React from "react";
import TopMenu from "./TopMenu";
import Decoration from "../assets/Decoration.svg"
import LinkedButton from "./LinkedButton";



const Logout = () => {

    return (
        <>
            <section className={"logout_section header"}>
                    <TopMenu />
                    <div className={"logout_content_container"}>
                    <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                    <img src={Decoration} alt={"decoration"}/>
                    <LinkedButton linkTarget={"/"} buttonClassName={"main_menu"} buttonContent={"Strona główna"} />
                    </div>
            </section>

        </>
    );
};
export default Logout;
