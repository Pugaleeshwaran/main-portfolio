import Title from "./components/title"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {

    const form = useRef();
    
    const showSuccessPopup = () => {
        const popup = document.getElementById("successPopup");
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 2500);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lpqai8a', 'template_nhicon4', form.current, {
                publicKey: 'YJCv1v9fkbjKh8AQA',
            })
            .then(
                () => {
                    showSuccessPopup(); 
                    console.log('SUCCESS!');
                    form.current.reset();  
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <footer className="contact-us" id="here_form">
            <div className="contact-us-title">
                <Title head={"contact"} para1={"get"} span={"in"} para2={" Touch"} />
            </div>

            <div className="contact-us-container">
                <div className="contact-us-left">

                    <div className="contact-details">
                        <h3 className="contact-details-head">ADDRESS</h3>
                        <p className="contact-details-para">Ponkunduppatti, Kattanipatti, Sivaganga,Tamil Nadu,630553.</p>
                    </div>

                    <div className="contact-details">
                        <h3 className="contact-details-head">CONTACT</h3>
                        <a className="contact-details-data" href="tel:+919655056172"><span>📞</span>(+91) 9655056172</a>
                        <a className="contact-details-data" href="mailto:pugaleeshwaranbecse@gmail.com"><span>📧</span> pugaleeshwaranbecse@gmail.com</a>
                    </div>

                    <div className="contact-details">
                        <h3 className="contact-details-head">FOLLOW ME</h3>
                        <div className="sidebar-content-logo">
                            <a href="https://www.linkedin.com/in/pugaleeshwaran-r-/" target="_blank">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="mailto:pugaleeshwaranbecse@gmail.com" target="_blank">
                                <i className="fa-solid fa-envelope"></i>
                            </a>
                            <a href="https://github.com/Pugaleeshwaran?tab=repositories" target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="contact-details">
                    <h3 className="contact-details-head">SEND US A NOTE</h3>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact-details">

                            <div className="contact-details-input">
                                <input type="text" name="name" placeholder="Name" />
                                <input type="email" name="email" placeholder="Email" />
                            </div>

                            <textarea name="message" placeholder="Tell us More about your Needs..." />

                            <div className="contact-submit-btn">
                                <input id="send_input" type="submit" value="Send Message" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div id="successPopup" className="successpop">
               <p>✔ Message Sent Successfully!</p> 
            </div>

        </footer>
    )
}

export default Footer;
