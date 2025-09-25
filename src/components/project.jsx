import Title from "./title"
import i1 from "../assetes/amezon.png"
import i2 from "../assetes/CFC.png"
import i3 from "../assetes/Home.png"
const Project = () => {
    return (
        <div className="project-container">
            <div className="project-title">
                <Title head={"Project"} para1={"My"} span={"W"} para2={"ork"} />
            </div>
            <div className="project-image">
                <img src={i1} alt="amazon-prime-clone-img" />
                <img src={i2} alt="tfc-img" />
                <div className="project-more">
                     <h3>Visit My All Projects</h3>
                     <p>Click the button below to explore more projects and see my full range of work!</p>
                     <button>View All Projects</button>
                </div>
            </div>

        </div>
    )
}
export default Project