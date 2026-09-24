const Mobilenav = (props) => {
    return (
        <div className="mobile-nav " style={props.style}>
            <div className="mobile-nav-con" onClick={props.onClose}>
                <a href="#home">Home </a>
                <a href="#about">About Me</a>
                <a href="#work">My Work</a>
                <a href="#resume">Resume</a>
                <a href="#here_form">Contact</a>
            </div>

        </div>
    )
}
export default Mobilenav