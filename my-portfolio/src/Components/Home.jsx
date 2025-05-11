import './Css/Home.css'
import imageMe from '../assets/me.JPG'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { HiArrowSmRight } from "react-icons/hi";
import Skills_Section from './Skills_Section';
import Project_Section from './Project_Section';
import Certification_Section from './Certification_Section';
import NavBar from './NavBar';
import Marquee from './Marquee';
import NavBar1 from './NavBar1';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Footer from './Footer';
import { FaEnvelope } from 'react-icons/fa';


import React, { useEffect, useState } from 'react';

const roles = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'];
export default function Home(){
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    // Navigation 
    const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
// -------NavBar hides
  const [showTopNav, setShowTopNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowTopNav(scrollTop < 50); // Top navbar appears near top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
// -----------------------------------------------------------------------------

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!deleting && charIndex === currentRole.length) {
        setDeleting(true);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);
    return (
        <>
        <section id="home" className='sections' style={{backgroundColor:'transparent'}} >
        <NavBar scrollToSection={scrollToSection}></NavBar>
        <div className={`right-navbar ${showTopNav ? 'fade-out' : 'fade-in'}`}> <NavBar1 scrollToSection={scrollToSection} ></NavBar1></div>
        </section>
        <div className="Page">
            <div className="Page-Container">
                <div className="left-section">
                    <div className='left-section-in'>
                        <div className='my-image'>
                            <img src={imageMe} width={220} className='myimage'></img>
                        </div>
                        <div className='my-details'>
                            <h1>Anis Sayyad</h1>
                            <h4>Full Stack Developer</h4>
                            <h4>Pune, Mharashtra</h4>
                        </div>
                        <div className='links'>
                            <a href="https://www.linkedin.com/in/anis-sayyad-4aa710231/" target="_blank" rel="noopener noreferrer" className='icon-wrapper1'>
                                <CiLinkedin size={20} className='nav-bar-icons1' />
                            </a>
                            <a href="https://github.com/Anissayyad47" target="_blank" rel="noopener noreferrer" className='icon-wrapper1'>
                                <FaGithub size={20} className='nav-bar-icons1' />
                            </a>
                            <a href="https://leetcode.com/u/Rex_Lapis/" target="_blank" rel="noopener noreferrer" className='icon-wrapper1'>
                                <SiLeetcode size={20} className='nav-bar-icons1' />
                            </a>
                            <a href="https://www.geeksforgeeks.org/user/sayyadaanyo/" target="_blank" rel="noopener noreferrer" className='icon-wrapper1'>
                                <SiGeeksforgeeks size={20} className='nav-bar-icons1' />
                            </a>
                        </div>

                        <div className='lets-talk'><button className='lets-talk-button' onClick={()=> scrollToSection("contact")}>let's talk</button></div>
                    </div>
                </div>

                <div className="right-section">
                    <div className='right-section-in'>
                    <div className='home-page'>
                    <div className='heading1'>
                        <h1>Hello There!</h1>
                            <h2 className="animated-text">
                            I am a <span>{text}</span><span className="cursor">|</span>
                            </h2>
                    </div>
                    <div className='heading2'>
                        <h4>I'm Anis Sayyad, a Full Stack Developer currently pursuing a BE in Computer Science and Engineering. I specialize in JavaScript, React, Node.js, Express.js, and MongoDB.
I've built several projects using these technologies, gaining practical experience in both frontend and backend development. I'm now looking for opportunities to grow and contribute as a developer.</h4>
                    </div>

                    <div className='education'>
                        <h3>JSPM'S Jayawantrao Sawant College of Engineering Pune</h3>
                        <h3>Bechalor's of Engineering - CSE</h3>
                    </div>

                    <div className='lets-talk'>
                        <button className='lets-talk-button' onClick={()=> scrollToSection("contact")}>Let's Talk</button>
                        <a href="Anis_Resume.pdf" download><button className="resume-download"><span>Resume</span></button></a>
                    </div>
                    <div className='text-opportunities'>
                        <h3>I'm currently looking for full-time opportunities. If you'd like to get in touch, feel free to reach out. I’d be happy to connect with you!</h3>
                    </div>
                    </div>
                    <Marquee></Marquee>

                    {/* SKILSS ***********************************8 */}
                    <section id="skills" className='sections' style={{backgroundColor:'transparent'}}>
                            <Skills_Section></Skills_Section>
                    </section>

                    {/* Projects ********************************* */}
                    <section id="projects" className='sections' style={{backgroundColor:'transparent'}} >
                        <Project_Section></Project_Section>
                    </section>
                    
                    {/* Certifications *************************** */}
                    <section id="certificate" className='sections' style={{backgroundColor:'transparent'}} >
                        <Certification_Section></Certification_Section>
                    </section>
                    <section id="contact" className='sections' style={{backgroundColor:'transparent'}} >
                    <div className='lets-collaborate'>
                        <div className='collab0rate'>
                            <div>
                                <h1>Let's</h1>
                                <h1 className='purple1'>collaborate</h1>
                            </div>
                            <BsArrowUpRightCircleFill className='collaborate-icon' size={60} onClick={() => scrollToSection('home')}></BsArrowUpRightCircleFill>
                        </div>
                        <div className='collaborate-text'>
                            <p>Unlock the potential of your product with expert design and</p>
                            <p>development services. Let's collaborate to create user-centered</p>
                            <p>solution that not only meet your goals but also delight your users.</p>
                        </div>
                                                <div className='links'>
                            <a href="https://www.linkedin.com/in/anis-sayyad-4aa710231/" target="_blank" rel="noopener noreferrer" className='icon-wrapper1'>
                                <CiLinkedin size={20} className='nav-bar-icons1' />
                            </a>
                            <a href="https://github.com/Anissayyad47" target="_blank" rel="noopener noreferrer" className='icon-wrapper1'>
                                <FaGithub size={20} className='nav-bar-icons1' />
                            </a>
                            <a href="mailto:sayyadanis356@gmail.com" className='icon-wrapper1'>
                                <FaEnvelope size={20} className='nav-bar-icons1'></FaEnvelope>
                            </a>
                        </div>
                    </div>
                    </section>
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}