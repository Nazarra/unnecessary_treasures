import React from "react";

const ThreePartArticle = (props) => {

    return(
        <>
            <div className={props.articleClassName}>
                <h2>{props.articleTitle}</h2>
                <h3>{props.articleHeader}</h3>
                <p>{props.articleContent}</p>
            </div>
        </>
    )
}

export default ThreePartArticle;