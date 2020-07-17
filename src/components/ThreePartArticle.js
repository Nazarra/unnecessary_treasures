import React,{useState} from "react";

const ThreePartArticle = (props) => {
    const [image, setImage]=useState(props.imageLocation)
    const [imagePath, setImagePath] = useState(props.imagePath)
    return(
        <>
            <div className={props.articleClassName}>
                {image === "imageTop" ? <img src={imagePath} /> : <h2>{props.articleTitle}</h2>}
                {image === "imageMiddle" ? <img src={imagePath} /> : <h3>{props.articleHeader}</h3>}
                {image === "imageBottom" ? <img src={imagePath} /> : <p>{props.articleContent}</p>}
            </div>
        </>
    )
}

export default ThreePartArticle;