import React, {useEffect,useState} from "react";
import HeaderDecoration from "../assets/Decoration.svg"
import HomeFooter from "./HomeFooter";

const HomeContactUs = () =>{
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(null)
    const [nameStyle, setNameStyle] =useState({borderColor:"black"})


    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [emailStyle, setEmailStyle] =useState({borderColor:"black"})


    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState(null)
    const [messageStyle, setMessageStyle] = useState({borderColor:"black"})

    const [successfulSend, setSuccessfulSend] = useState(false)



    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange =(e) => {
        setMessage(e.target.value)
    }

    const handleValidationSubmit = (e) =>{

        e.preventDefault();

        const regName = new RegExp("^[A-Z]{1}[a-z]{2,15}$");
        if (!regName.test(name)){
            setNameError("Podane imię jest nieprawidłowe!")
            setNameStyle({borderColor:"red"})
        }else {
            setNameError(null)
            setNameStyle({borderColor:"black"})
        }

        const regEmail = new RegExp ("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")
        if(!regEmail.test(email)){
            setEmailError("Podany email jest nieprawidłowy!")
            setEmailStyle({borderColor:"red"})
        }else {
            setEmailError(null)
            setEmailStyle({borderColor:"black"})
        }

        if(message.length < 150){
            setMessageError("Wiadomość musi mieć co najmniej 120 znaków!")
            setMessageStyle({borderColor:"red"})
        }else {
            setMessageError(null)
            setMessageStyle({borderColor:"black"})
        }

        if(!nameError && !emailError && !messageError){
            const API = "https://fer-api.coderslab.pl/v1/portfolio"

            const data={
                name: name,
                email: email,
                message: message
            }
            fetch(`${API}/contact`, {
                method: "POST",
                body: JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data =>{
                    setSuccessfulSend(true)
                    setName("")
                    setEmail("")
                    setMessage("")
                    setTimeout(()=>{setSuccessfulSend(false)},5000)
            })
                .catch(error =>{
                    setSuccessfulSend(false)
                })
        }
    }


    return (
        <>
           <section className={"contact_us_container"} name={"contact"}>
               <article className={"contact_us_header"}>
                   <h2>Skontaktuj się z nami</h2>
                   <img src={HeaderDecoration} alt={"decoration-image"} />
                   {successfulSend === true ? <h3 className={"successful_send"}>Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</h3> : null}
               </article>
               <form className={'contact_us_form'} onSubmit={handleValidationSubmit}>

                   <label>Wpisz swoje imię
                    <input type={"text"} name={"name"} value={name} style={nameStyle}  placeholder={"Imię"} onChange={handleNameChange} />
                       {!nameError ? null : <p className={"form_Error error_Name"}>{nameError}</p>}
                   </label>


                   <label>Wpisz swój email
                       <input type={"text"} name={'email'} style={emailStyle} value={email} placeholder={"TwójEmail@gmail.com"} onChange={handleEmailChange}/>
                       {!emailError ? null : <p className={"form_Error error_Email"}>{emailError}</p>}
                   </label>


                   <label>Wpisz swoją wiadomość
                    <textarea name={"message"} wrap={'hard'}
                              placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id velit vulputate, egestas elit porta, feugiat neque. Donec finibus molestie dolor ut porta. Etiam rutrum pellentesque mauris vel dignissim. Maecenas."}
                              onChange={handleMessageChange}
                              value={message}
                              style={messageStyle}
                    />
                       {!messageError ? null : <p className={"form_Error error_Message"}>{messageError}</p>}
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