import React from "react";
import ThreePartArticle from "./ThreePartArticle";

const HomeAboutUs = () =>{



    return (
        <>
        <section className={"about_us_container"} name={"About_Us"}>
            <article className={"about_us_content"}>
                <ThreePartArticle articleClassName={"about_us_article"}
                                  articleTitle={"O nas"}
                                  articleHeader={''}
                                  articleContent={'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'}
                />
            </article>
            <div className={"about_us_image"}></div>
        </section>
        </>

    )
}

export default HomeAboutUs;