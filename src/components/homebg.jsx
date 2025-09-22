import Bghome from "../assetes/coding.jpg"
import { useTypewriter, Cursor } from "react-simple-typewriter"
const Homebg = () => {
    const [text] = useTypewriter({
        words: ["I am Pugaleeshwaran", "MERN Stack Developer",
            "Full Stack Developer", "Grapic Designer", "Professional Editor", "Java"],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80,
    })
    return (
        <div className="homebg-container">
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
                <button>Hire Me</button>
        </div>
    )
}
export default Homebg