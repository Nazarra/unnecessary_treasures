import React from "react";
import TopMenu from "./TopMenu";
import Decoration from "../assets/Decoration.svg"
import LinkedButton from "./LinkedButton";



const LogIn = () => {

    return (
        <>
            <section className={"register_and_login_section header logIn_section"}>
                <section className={"LogIn_content Register_Content"}>
                    <TopMenu />
                    <div className={"register_form_container Login_form_container"}>
                        <h2>Zaloguj się</h2>
                        <img src={Decoration} alt={"logIn decoration"} />
                        <form className={'register_form LogIn_form'}>


                            <label> Email
                                <input type={"email"} name={'email'}/>
                            </label>

                            <label>Hasło
                                <input type={"password"} name={"password"}/>
                            </label>

                            <input type={"submit"} value={"Wyślij"} className={"register_form_button"}/>
                        </form>
                        <LinkedButton linkTarget={'/register'} buttonClassName={"register_and_login_button login"} buttonContent={"Załóż konto"} />
                    </div>
                </section>
            </section>

        </>
    );
};
export default LogIn;
