import img1 from "../images/act.webp"
import { Link } from "react-router-dom"
const Allproject = (props) => {
    return (
        <div className="all_project">
            <div className="all_project_list">
                <img src={props.img} alt="act-to-img" />
                <div className="all_project_details">
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                    <Link to={props.link} target="_blank"><button>Visit site</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Allproject