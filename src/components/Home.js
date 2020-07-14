import React, {useState} from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";




const Home = () => {

    return (
        <>
            <header className={"header"}>
                <HomeHeader />
                <HomeThreeColumns />
            </header>
        </>
    );
};
export default Home;