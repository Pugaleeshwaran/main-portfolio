import Title from "./title"
const About = () => {
    return (
        <div className="about-container" id="about">
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
                    <a className="about-content-name" href="mailto:pugaleeshwaranbecse@gmail.com"><span className="about-content-right-span">email:</span> pugaleeshwaranbecse@gmail.com</a>
                    <p><span className="about-content-right-span">Age:</span> 21</p>

                    <p><span className="about-content-right-span">Form:</span> Sivagangai</p>
                    <a className="download-cv" href="/file/Pugal_im.pdf" download='pugal_resume.pdf'>Download CV</a>
                    <a className="view-cv" href="/file/Pugal_im.pdf" >View CV</a>

                </div>
            </div>
        </div>

    )
}
export default About