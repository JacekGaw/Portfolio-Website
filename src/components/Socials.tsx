import React from "react";
import { Link } from "react-router";
import githubIcon from "../assets/img/github.svg"
import linkedinIcon from "../assets/img/linkedin.svg"
import mailIcon from "../assets/img/envelope.svg"
import Button from "./Button";

const Socials: React.FC = () => {

    return (
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-2 md:gap-5">
                        <Link to="https://github.com/JacekGaw" target="_blank" className="rounded-full"><Button variant={1}><img src={githubIcon} className="h-8 w-auto" /></Button></Link>
                        <Link to="https://www.linkedin.com/in/jacek-gawlyta/" target="_blank" className="rounded-full"><Button variant={1}><img src={linkedinIcon} className="h-8 w-auto" /></Button></Link>
                        <Link to="mailto:jac.gawlyta@gmail.com" target="_blank" className="rounded-full"><Button variant={1}><img src={mailIcon} className="h-8 w-auto" /></Button></Link>
                        <Link to={"/Jacek_Gawlyta_CV.pdf"} download target="_blank" className="hidden md:block rounded-full"><Button >Download CV</Button></Link>
                        <Link to={"/Jacek_Gawlyta_CV.pdf"} download target="_blank" className="md:hidden rounded-full"><Button variant={1}>CV</Button></Link>
                    </div>
    )
}

export default Socials;