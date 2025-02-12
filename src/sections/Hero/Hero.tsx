import React from "react";
import locationIcon from "../../assets/img/location.svg"
import githubIcon from "../../assets/img/github.svg"
import linkedinIcon from "../../assets/img/linkedin.svg"
import mailIcon from "../../assets/img/envelope.svg"
import Button from "../../components/Button";
import { Link } from "react-router";


const Hero: React.FC = () => {

    return (
        <section className="flex p-10 w-full h-full min-h-screen justify-center items-center">
            <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-10 md:gap-5 justify-center items-center md:justify-between md:items-start">
                <header className="flex flex-col justify-center md:justify-start items-center md:items-start gap-7">
                    <h1 className="font-[800] text-center md:text-left uppercase text-7xl sm:text-7xl lg:text-9xl  drop-shadow-2xl shadow-black">Jacek<br/>Gawlyta</h1>
                    <h3 className="text-2xl md:text-5xl font-[400]">Fullstack Web Developer</h3>
                    <div className="flex gap-2 md:gap-5 items-center">
                        <img src={locationIcon} className="h-6 md:h-10 w-auto opacity-50" />
                        <p className="text-lg md:text-2xl text-gray-600 font-[400]">based in Wrocław, Poland</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-5">
                        <Link to="https://github.com/JacekGaw" target="_blank" className="rounded-full"><Button variant={1}><img src={githubIcon} className="h-8 w-auto" /></Button></Link>
                        <Link to="https://www.linkedin.com/in/jacek-gawlyta/" target="_blank" className="rounded-full"><Button variant={1}><img src={linkedinIcon} className="h-8 w-auto" /></Button></Link>
                        <Link to="mailto:jac.gawlyta@gmail.com" target="_blank" className="rounded-full"><Button variant={1}><img src={mailIcon} className="h-8 w-auto" /></Button></Link>
                        <Link to={"/Jacek_Gawlyta_CV.pdf"} download target="_blank" className="rounded-full"><Button >Download CV</Button></Link>
                    </div>
                </header>
                <nav>
                    <ul className="flex flex-col  items-end gap-3 md:gap-10 md:text-3xl">
                        <Link to={"#"}>About -</Link>
                        <Link to={"#"}>Experience -</Link>
                        <Link to={"#"}>Projects -</Link>
                        <Link to={"#"}>Contact -</Link>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Hero