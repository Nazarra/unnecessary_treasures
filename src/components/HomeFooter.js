import React from "react";
import FacebookImg from "../assets/Facebook.svg"
import InstagramImg from "../assets/Instagram.svg"

const HomeFooter = () => {
    return(
        <>
            <footer >
            <h2 className={"footer_content"}>Copyright by Coders Lab</h2>
                <img src={FacebookImg} alt={"facebook"} className={'footer_facebook_img'} />
                <img src={InstagramImg} alt={"instagram"} className={'footer_instagram_img'} />
            </footer>
        </>
    )
}
export default HomeFooter