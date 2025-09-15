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
                <a href="#">Home </a>
                <a href="#">About Me</a>
                <a href="#">My Work</a>
                <a href="#">Resume</a>
                <a href="#">Contact</a>
                <div className="sidebar-content-logo">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-brands fa-github"></i>

                </div>

            </div>
        </div>
        </aside>

    )
}

export default Sidebar