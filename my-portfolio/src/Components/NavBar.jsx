import './Css/NavBar.css'
import { CiHome } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import { CiFolderOn } from "react-icons/ci";
import { PiCertificateThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { useEffect, useState } from 'react';

export default function NavBar({scrollToSection}){
        const [activeSection, setActiveSection] = useState('');
    
        useEffect(() => {
            const sections = ['home', 'skills', 'projects', 'certificate', 'contact'];
    
            const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
                });
            },
            { threshold: 0.5 }
            );
    
            sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
            });
    
            return () => {
            sections.forEach(id => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
            };
        }, []);
    return (
        <>
        <div className='navigation-bar'>
        <div className='nav-bar'>
            <div className={`icon-wrapper ${activeSection === 'home' ? 'active' : ''}`}>
                <CiHome size={30} className='nav-bar-icons' onClick={()=> scrollToSection("home")}></CiHome>
                <span className="icon-label">Home</span>
            </div>

            <div className={`icon-wrapper ${activeSection === 'skills' ? 'active' : ''}`}>
                <VscTools size={30} className='nav-bar-icons' onClick={()=> scrollToSection("skills")}></VscTools>
                <span className="icon-label">Skills</span>
            </div>

            <div className={`icon-wrapper ${activeSection === 'projects' ? 'active' : ''}`}>
                <CiFolderOn size={30} className='nav-bar-icons' onClick={()=> scrollToSection("projects")} ></CiFolderOn>
                <span className="icon-label">Projects</span>
            </div>

            <div className={`icon-wrapper ${activeSection === 'certificate' ? 'active' : ''}`}>
                <PiCertificateThin size={30} className='nav-bar-icons' onClick={()=> scrollToSection("certificate")}></PiCertificateThin>
                <span className="icon-label">Certification</span>
            </div>

            <div className={`icon-wrapper ${activeSection === 'contact' ? 'active' : ''}`}>
                <CiMail size={30} className='nav-bar-icons' onClick={()=> scrollToSection("contact")}></CiMail>
                <span className="icon-label">Conatact</span>
            </div>
        </div>
        </div>
        </>
    )
}