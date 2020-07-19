import React from "react";
import HeaderDecoration from "../assets/Decoration.svg"
import HomeFooter from "./HomeFooter";

const HomeContactUs = () =>{



    return (
        <>
           <section className={"contact_us_container"} name={"contact"}>
               <article className={"contact_us_header"}>
                   <h2>Skontaktuj się z nami</h2>
                   <img src={HeaderDecoration} alt={"decoration-image"} />
               </article>
               <form className={'contact_us_form'}>

                   <label>Wpisz swoje imię
                    <input type={"text"} name={"name"} placeholder={"Imię Nazwisko"} />
                   </label>


                   <label>Wpisz swój email
                       <input type={"email"} name={'email'} placeholder={"TwójEmail@gmail.com"}/>
                   </label>


                   <label>Wpisz swoją wiadomość
                    <textarea name={"massage"} wrap={'hard'}
                              placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id velit vulputate, egestas elit porta, feugiat neque. Donec finibus molestie dolor ut porta. Etiam rutrum pellentesque mauris vel dignissim. Maecenas."}
                    />
                   </label>
                    <div className={'contact_us_form_error_container'}></div>
                   <input type={"submit"} value={"Wyślij"} className={"contact_us_form_button"}/>
               </form>
           </section>
            <HomeFooter/>


        </>
    )
}

export default HomeContactUs;