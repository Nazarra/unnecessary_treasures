import React from "react";
import ThreePartArticle from "./ThreePartArticle";
import LinkedButton from "./LinkedButton";
import FirstImage from "../assets/Icon-1.svg"
import SecondImage from "../assets/Icon-2.svg"
import ThirdImage from "../assets/Icon-3.svg"
import FourthImage from "../assets/Icon-4.svg"

const HomeSimpleSteps = () => {


    return(
        <>
            <section className={'simple_steps_container'} name={"HomeSimpleSteps"}>
                <h2 className={'simple_steps_title'}>Wystarczą 4 proste kroki</h2>
                <div className={"simple_steps_article"}>
                    <ThreePartArticle articleClassName={"simple_steps_article first"}
                                      imageLocation={'imageTop'}
                                      imagePath={FirstImage}
                                      articleHeader={'Wybierz rzeczy'}
                                      articleContent={'ubrania,zabawki,sprzęt i inne'}
                    />
                    <ThreePartArticle articleClassName={"simple_steps_article second"}
                                      imageLocation={'imageTop'}
                                      imagePath={SecondImage}
                                      articleHeader={'Spakuj je'}
                                      articleContent={'skorzystaj z worków na śmieci'}
                    />
                    <ThreePartArticle articleClassName={"simple_steps_article third"}
                                      imageLocation={'imageTop'}
                                      imagePath={ThirdImage}
                                      articleHeader={'Zdecyduj komu chcesz pomóc'}
                                      articleContent={'wybierz zaufane miejsce'}
                    />
                    <ThreePartArticle articleClassName={"simple_steps_article fourth"}
                                      imageLocation={'imageTop'}
                                      imagePath={FourthImage}
                                      articleHeader={'zamów kuriera'}
                                      articleContent={'kurier przyjedzie w dogodnym terminie'}
                    />
                </div>
                <LinkedButton linkTarget={"/logIn"} buttonClassName={"simple_steps_button"} buttonContent={"ODDAJ RZECZY"} />
            </section>
        </>
    )
}

export default HomeSimpleSteps;