import Allproject from "./allproject"
import act from "../images/act.webp"
import cfc from "../assetes/CFC.webp"
import home from "../assetes/Home.webp"
import chatbot from "../images/chatbot.webp"
import green from "../images/greendan.webp"
import menstra from "../images/menstra.webp"
import perfumy from "../images/perfumy.webp"
import trip from "../images/trip.webp"
import udemy from "../images/udemy.webp"
import weather from "../images/weather.webp"
import { Link } from "react-router-dom"
const Projectlist = () => {
    return (
        <div className="project-list">
            <Allproject img={home} h3={"Amazon Prime Clone"} p={"A fully responsive Amazon Prime Clone Website built using HTML, CSS, and JavaScript."} link={"https://pugaleeshwaran.github.io/Amazon_prime_clone/"} />
            <Allproject img={act} h3={"Act-Doto"} p={"Developed a responsive To-Do List web application with user-friendly interface and task management features."} link={"https://actdoto-react.vercel.app/"} />
            <Allproject img={cfc} h3={"TFC Nation"} p={"Fully Responsive Webside UI build using HTML,CSS for Restaurants."} link={"https://pugaleeshwaran.github.io/TFC-web-project/"} />
            <Allproject img={udemy} h3={"Udemy"} p={"built a Udemy Clone Website using HTML and CSS and React js and it’s fully responsive across all devices!"} link={"https://udemy-clone-react-apab.vercel.app/"} />
            <Allproject img={trip} h3={"Trip Adviser"} p={"a clean and modern frontend experience inspired by Trip adviser Clone."} link={"https://pugaleeshwaran.github.io/Trip_Advisor-Clone/"} />
            <Allproject img={menstra} h3={"Menstra"} p={"Menstra, an e-commerce website built using HTML, CSS, and JavaScript. This platform is designed to be fully responsive across all devices."} link={"https://pugaleeshwaran.github.io/menstra/"} />
            <Allproject img={weather} h3={"Weather Report app"} p={"Developed a weather application using JavaScript, HTML, CSS, and OpenWeather API Implemented real-time weather data fetching based on user input "} link={"https://weather-app-2qmb.vercel.app/"} />
            <Allproject img={green} h3={"Greendan"} p={"a fully responsive website built using HTML and Tailwind CSS and Java Script"} link={"https://pugaleeshwaran.github.io/greendon-webpage/"} />
            <Allproject img={perfumy} h3={"Perfumy"} p={"a fully responsive website built using HTML and css React Js"} link={"https://perfumy-react-lphd.vercel.app/"} />
            <Allproject img={chatbot} h3={"Weather Report Chat Bot"} p={"Developed a weather application with Chat Bot using JavaScript, HTML, CSS, and IBM Watson could Assistance real-time weather data fetching based on user input "} link={"https://pugaleeshwaran.github.io/Weather-Chat-bot-deployment-/"} />
        </div>

    )
}
export default Projectlist