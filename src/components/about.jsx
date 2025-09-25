import Title from "./title"
const About = () => {
    return (
        <div className="about-container">
            <div className="about-title">
                <Title head={"About Me"} para1={"Know"} span={" Me "} para2={"More"} />

            </div>
            <div className="about-content">
                <div className="about-content-left">
                    <h3>I'm <span className="about-content-name">Pugaleeshwaran </span>,MERN Full Stack <br /> Developer</h3>
                    <p>Hi, my name is Pugaleeshwarn. Im a MERN Full Stack Developer.</p>
                    <p>I am proficient in Webdevelopment skills like:</p>
                    <p>HTML, CSS, JavaScript ES6, Bootstrap, Tailwind CSS, React.js ,Node.js ,Express.js ,MongoDB ,Redux ,Java ,WordPress.</p>
                </div>
                <div className="about-content-right">
                    <p><span className="about-content-right-span">Name:</span> Pugaleeshwaran R</p>
                    <p className="about-content-name"><span className="about-content-right-span">email:</span> pugaleeshwaranbecse@gmail.com</p>
                    <p><span className="about-content-right-span">Age:</span> 21</p>

                    <p><span className="about-content-right-span">Form:</span> Sivagangai</p>
                    <button className="download-cv">Download CV</button>
                    <button className="view-cv">View CV</button>

                </div>
            </div>
        </div>

    )
}
export default About