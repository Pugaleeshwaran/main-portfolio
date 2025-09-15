const About = () => {
    return (
        <div className="about-all">
            <div className="about-header">
                <h1>ABOUT ME</h1>
                <h2>KNOW <span>ME</span> MORE ! </h2>
            </div>
            <div className="about-header-details">
                <div className="about-header-main">
                    <h3>I am <span>Pugaleeshwaran</span> , A MERN Stack <br />Developer</h3>
                    <p className="about-name">Hii, My Name Is Pugaleeshwaran.I am MERN Stack Developer.</p>
                    <p>My Web development Skill Like :</p>
                    <p style={{marginTop:"10px",color:"white"}}> HTML,CSS,JavaScript,BootStrap,Tailwind CSS,React.js,Node.js,Express.js,MongoDB,Redux,Java.</p>
                    <p style={{marginTop:"20px"}}>My Grapic Designing Skill Like :</p>
                    <p style={{marginTop:"10px",color:"white"}}> Adobe Premire Pro , After Effect, PhotoShop, Canva, Capcut .</p>
                </div>
                <div className="about-header-side">
                    <div className="side-detial">
                        <p>Name:<span> Pugaleeshwaran R</span></p>
                        <p>Email:<span className="mails"> pugaleeshwaranbecse@gmail.com</span></p>
                        <p>Age:<span> 21</span></p>
                        <p>From:<span> Sivagangai</span></p>
                    </div>

                    <div className="resume-but">
                        <a href="#" className="docv">Download Resume</a>
                        <br />
                        <a href="#" className="secv">View Resume</a>
                    </div>

                </div>

            </div>
        </div>

    )
}
export default About