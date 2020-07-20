import React from "react";
import LinkedButton from "./LinkedButton";
import TopMenu from "./TopMenu";

const HomeHeader = () => {


    return (
        <>
            <header className={"homeHeader header"} name={"Header"}>
                <div className={"header_Image"}></div>
                    <section className={"Header_Content"}>
                        <TopMenu />
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