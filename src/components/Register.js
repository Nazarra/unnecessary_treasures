import React from "react";
import TopMenu from "./TopMenu";
import Decoration from "../assets/Decoration.svg"
import LinkedButton from "./LinkedButton";



const Register = () => {

    return (
        <>
            <section className={"register_and_login_section header"}>
                    <section className={"Header_Content Register_Content"}>
                        <TopMenu />
                        <div className={"register_form_container form_container"}>
                            <h2>Załóż konto</h2>
                            <img src={Decoration} alt={"regiser decoration"} />
                            <form className={'register_form'}>

                                <label> Email
                                    <input type={"email"} name={'email'}/>
                                </label>

                                <label>Hasło
                                    <input type={"password"} name={"password"}/>
                                </label>

                                <label>Powtórz hasło
                                    <input type={"password"} name={"repeat_password"}/>
                                </label>

                                <input type={"submit"} value={"Wyślij"} className={"register_form_button"}/>
                            </form>
                            <LinkedButton linkTarget={'/logIn'} buttonClassName={"register_and_login_button login"} buttonContent={"Zaloguj"} />
                        </div>
                    </section>
            </section>

        </>
    );
};
export default Register;
