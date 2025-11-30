import Avather from "../assetes/avatar.webp"
import Homebg from "./homebg"
const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-img">
                    <img src={Avather} alt="" />
                    <h3>Pugaleeshwaran R</h3>
                </div>

                <div className="sidebar-content">
                    <a href="#home">Home </a>
                    <a href="#about">About Me</a>
                    <a href="#work">My Work</a>
                    <a href="#resume">Resume</a>
                    <a href="#here_form">Contact</a>
                    <div className="sidebar-content-logo">
                        <a href="https://www.linkedin.com/in/pugaleeshwaran-r-/ " target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="mailto:pugaleeshwaranbecse@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                        <a href="https://github.com/Pugaleeshwaran?tab=repositories" target="_blank"><i className="fa-brands fa-github"></i></a>

                    </div>

                </div>
            </div>
        </aside>

    )
}

export default Sidebar