import Title from "./components/title"
const Footer = () => {
    return (
        <footer className="contact-us">
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
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-solid fa-envelope"></i>
                            <i className="fa-brands fa-github"></i>

                        </div>

                    </div>
                </div>

                <div className="contact-us-right">
                    <div className="contact-details">
                        <h3 className="contact-details-head">SEND US A NOTE</h3>
                        <div className="contact-details-input">
                            <input type="text" placeholder="Name" />
                            <input type="mail" placeholder="Email" />
                        </div>

                        <textarea name="" id="" placeholder="Tell us More about your Needs..."></textarea>
                        <div className="contact-submit-btn">
                            <button>Send Message</button>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer