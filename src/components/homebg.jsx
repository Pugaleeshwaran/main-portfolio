import Bghome from "../assetes/coding.webp"
import { useTypewriter, Cursor } from "react-simple-typewriter"
const Homebg = () => {
    const [text] = useTypewriter({
        words: ["I am Pugaleeshwaran", "MERN Stack Developer",
            "Full Stack WebDeveloper", "professional Editor", "Java"],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80,
    })
    return (
        <div className="homebg-container" id="home">
            <h3>
                Welcome
            </h3>
            <h4 className="type-text">
                {text}
                <span className="type-text-pin">
                    <Cursor />
                </span>
                </h4>
                <p>
                    Based in Chennai, Tamil Nadu, India.
                </p>
                <a href="#here_form">Hire Me</a>
        </div>
    )
}
export default Homebg