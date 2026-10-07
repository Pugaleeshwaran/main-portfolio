import { Link } from "react-router-dom"
import Title from "./title"
import i1 from "../images/E-commerce_thum.png"
import i2 from "../images/rosewood-theme-img.png"
const Project = () => {
    return (
        <div className="project-container" id="work">
            <div className="project-title">
                <Title head={"Project"} para1={"My"} span={"W"} para2={"ork"} />
            </div>
            <div className="project-image">
                <div className="project-image-div">
                    <img src={i2} alt="rosewood-bakery-img" />
                    <div className="project-image-div-details">
                        <h3>Rosewood — Bakery & Cake Shop</h3>
                        <p>A premium, fully responsive bakery website template for bakeries, home bakers, cake studios, and dessert shops.</p>
                        <Link to={"https://rosewood-bakery-domo.vercel.app/"} target="_blank"> <button>Visit Site</button></Link>
                    </div>


                </div>
                <div className="project-image-div">
                    <img src={i1} alt="amazon-prime-clone-img" />
                    <div className="project-image-div-details">
                        <h3>Rabbit – E-Commerce Website</h3>
                        <p>Built a responsive clothing store by using  React.js, Redux Toolkit, Node.js, Express.js, MongoDB, Tailwind CSS, PayPal.</p>
                        <Link to={"https://womeniacollection.vercel.app/"} target="_blank" ><button>Visit site</button></Link>
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