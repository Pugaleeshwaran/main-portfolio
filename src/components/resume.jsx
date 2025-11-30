import Title from "./title"
const Resume = () => {
    return (
        <div className="resume_container" id="resume">
            <div className="resume_title">
                <Title head={"Summary"} para1={"My"} span={"Re"} para2={"sume"} />
            </div>
            <div className="resume-edu">
                <h3 className="resume-heading">Education</h3>
                <div className="resume-edu-details">
                    <p className="resume-time">2020-2021</p>
                    <h3 className="resume-sub">Higher Secondary Education</h3>
                    <p className="resume-para">Govt Higher Secondary School - Eriyur, Sivagangai.</p>

                </div>
                <div className="resume-edu-details">
                    <p className="resume-time">2021-2025</p>
                    <h3 className="resume-sub">Bachelor of Engineering </h3>
                    <p className="resume-para">Nehru Institute of Engineering Technology - Coimbatore,Tamilnadu.</p>

                </div>
            </div>
            <div className="resume-edu">
                <h3 className="resume-heading">Experience</h3>
                <div className="resume-edu-details">

                    <h3 className="resume-sub">Full stack Web developer Inten</h3>
                    <p className="resume-para">Nashi Informatics Solutions Private Limited</p>
                    <p className="resume-inten-time"> August 2025 - October 2025</p>
                    <p className="resume-inten-para">I worked as a Web Developer in Nashi Informatics Solutions Private Limited, contributing to the design and development of key event websites. My role involved creating responsive and visually engaging web pages to enhance user experience.</p>

                </div>
            </div>
            <div className="resume-edu">
                <h3 className="resume-heading">Certifications</h3>
                <div className="resume-edu-details">

                    <h3 className="resume-sub">Programming in Java</h3>
                    <p className="resume-para">NPTEL Online Certification</p>
                    <p className="resume-inten-time"> January 2024 - April 2024</p>
                    <p className="resume-inten-para">Completed an intensive course on Programming in Java covering core concepts like object-oriented programming, exception handling, inheritance, interfaces, multithreading, and Java collections. Gained practical coding experience and improved problem-solving skills through weekly assignments and hands-on exercises.</p>

                </div>
                <div className="resume-edu-details">

                    <h3 className="resume-sub">Java Full stack</h3>
                    <p className="resume-para">Wipro Talent Next</p>
                    <p className="resume-inten-time"> May 2024 - September 2024</p>
                    <p className="resume-inten-para">Completed the Full Stack Java Developer program focusing on Java, JDBC, HTML, CSS, JavaScript,React js, and database management. Learned the full-stack web applications using modern Java technologies and frameworks.</p>

                </div>
            </div>
            <div className="resume-edu">
                <h3 className="resume-heading">Skills</h3>
                <div className="resume-skill-details">

                    <p className="resume-skills">HTML</p>
                    <p className="resume-skills">CSS</p>
                    <p className="resume-skills">JavaScript</p>
                    <p className="resume-skills">React js</p>
                    <p className="resume-skills">Tailwind CSS</p>
                    <p className="resume-skills">BootStarp</p>
                    <p className="resume-skills">Node js</p>
                    <p className="resume-skills">Express js</p>
                    <p className="resume-skills">Mongo DB</p>
                    <p className="resume-skills">WordPress</p>
                    <p className="resume-skills">Java</p>
                    <p className="resume-skills">Video Editing</p>
                </div>
            </div>
            <div className="resume-cv">
                <a href="/file/Pugal_im.pdf" download="pugal_resume.pdf">Download CV<i className="fa-solid fa-download"></i></a>
                
            </div>
        </div>
    )
}

export default Resume