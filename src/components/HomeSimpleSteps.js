import React, {useState,useEffect} from "react";
import ThreePartArticle from "./ThreePartArticle";
import LinkedButton from "./LinkedButton";

const HomeSimpleSteps = () => {


    return(
        <>
            <section className={'simple_steps_container'} name={"HomeSimpleSteps"}>
                <h2 className={'simple_steps_title'}>Wystarczą 4 proste kroki</h2>
                <div className={"simple_steps_article"}>
                    <ThreePartArticle articleClassName={"simple_steps_article first"}
                                      articleTitle={''}
                                      articleHeader={'Wybierz rzeczy'}
                                      articleContent={'ubrania,zabawki,sprzęt i inne'}
                    />
                    <ThreePartArticle articleClassName={"simple_steps_article second"}
                                          articleTitle={''}
                                          articleHeader={'Spakuj je'}
                                          articleContent={'skorzystaj z worków na śmieci'}
                    />
                    <ThreePartArticle articleClassName={"simple_steps_article third"}
                                          articleTitle={''}
                                          articleHeader={'Zdecyduj komu chcesz pomóc'}
                                          articleContent={'wybierz zaufane miejsce'}
                    />
                    <ThreePartArticle articleClassName={"simple_steps_article fourth"}
                                          articleTitle={''}
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