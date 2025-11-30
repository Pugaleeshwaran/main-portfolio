import { Link } from "react-router-dom"
import Title from "./title"
import i1 from "../assetes/amezon.webp"
import i2 from "../images/udemy.webp"
import i3 from "../assetes/Home.webp"
const Project = () => {
    return (
        <div className="project-container" id="work">
            <div className="project-title">
                <Title head={"Project"} para1={"My"} span={"W"} para2={"ork"} />
            </div>
            <div className="project-image">
                <div className="project-image-div">
                    <img src={i2} alt="tfc-img" />
                    <div className="project-image-div-details">
                        <h3>Udemy Clone</h3>
                        <p>A fully responsive Online E-Learning Website Udemy Clone built using HTML, CSS, and React js.</p>
                        <Link to={"https://udemy-clone-react-apab.vercel.app/"} target="_blank"> <button>Visit Site</button></Link>
                    </div>


                </div>
                <div className="project-image-div">
                    <img src={i1} alt="amazon-prime-clone-img" />
                    <div className="project-image-div-details">
                        <h3>Amazon Prime Clone</h3>
                        <p>A fully responsive Amazon Prime Clone Website built using HTML, CSS, and JavaScript.</p>
                        <Link to={"https://pugaleeshwaran.github.io/Amazon_prime_clone/"} target="_blank" ><button>Visit site</button></Link>
                    </div>
                </div>
                <div className="project-more">
                    <h3>Visit My All Projects</h3>
                    <p>Click the button below to explore more projects and see my full range of work!</p>
                   <Link to={"projectlist"} target="_blank"><button>View All Projects</button></Link> 
                </div>


            </div>

        </div>
    )
}
export default Project