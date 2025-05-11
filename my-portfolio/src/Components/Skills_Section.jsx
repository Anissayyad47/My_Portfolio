import './Css/Skills.css'
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import react from '../assets/react-logo.png';
import redux from '../assets/redux.png'
import sql from '../assets/sql.png'
import java from '../assets/java.png'
import csharp from '../assets/csharp.png'
import gpt from '../assets/GPT.jpg'
import aws from '../assets/aws1.png'



export default function Skills_Section() {
    return(
        <>
                        <div className='skills-section'>
                        <div className='skills-heading'>
                            <h1> Technologies and Tools for</h1>
                            <h1>Exceptional <span className='purple'>Results</span></h1>
                            <h3 className='heading-skills'>Technical <span className='purple'> Skills</span></h3>
                        </div>

                        <div className='skills'>
                            <div className='skills-left'>
                                <div className='skills-set'>
                                    <img src={react} alt="" width={60} className='skills-icon' style={{backgroundColor:'rgb(37, 34, 34)'}}/>
                                    {/* <RiReactjsFill className='skills-icon ' size={40} style={{color:'blue'}}></RiReactjsFill> */}
                                    <div className='skills-title'>
                                        <h2>React Js</h2>
                                        <h4>UI Library</h4>
                                    </div>
                                </div>
                                <div className='skills-set'>
                                    <FaNodeJs className='skills-icon' size={40} style={{color:'green'}}></FaNodeJs >
                                    <div className='skills-title'>
                                        <h2>Node Js</h2>
                                        <h4>Backend Runtime</h4>
                                    </div>
                            </div>
                            <div className='skills-set'>
                                    <SiMongodb className='skills-icon' size={40} style={{color:'green'}}></SiMongodb>
                                    <div className='skills-title'>
                                        <h2>MongoDB</h2>
                                        <h4>NoSQL Database</h4>
                                    </div>
                            </div>
                            <div className='skills-set'>
                                    {/* <FaJava className='skills-icon' size={40}></FaJava> */}
                                    <img src={java} alt="" width={60} className='skills-icon' />
                                    <div className='skills-title'>
                                        <h2>Java</h2>
                                        <h4>OOP Language</h4>
                                    </div>
                            </div>
                            </div>
                            <div className='skills-right'>
                            <div className='skills-set'>
                                    <img src={redux} alt="" width={60} className='skills-icon'/>
                                    {/* <SiRedux className='skills-icon' size={40}></SiRedux> */}
                                    <div className='skills-title'>
                                        <h2>Redux</h2>
                                        <h4>State Manager</h4>
                                    </div>
                            </div>
                            <div className='skills-set'>
                                    <SiExpress className='skills-icon' size={40} style={{backgroundColor:'black', color:'white'}}></SiExpress>
                                    <div className='skills-title'>
                                        <h2>Express Js</h2>
                                        <h4>Web Framework</h4>
                                    </div>
                            </div>
                            <div className='skills-set'>
                                    {/* <SiMysql className='skills-icon' size={40} style={{color:'blue'}}></SiMysql> */}
                                    <img src={sql} alt="" width={60} className='skills-icon' />
                                    <div className='skills-title'>
                                        <h2>MySql</h2>
                                        <h4>SQL Database</h4>
                                    </div>
                            </div>
                            <div className='skills-set'>
                                    {/* <SiMysql className='skills-icon' size={40}></SiMysql> */}
                                    <img src={csharp} alt="" width={60} className='skills-icon' />
                                    <div className='skills-title'>
                                        <h2>C#</h2>
                                        <h4>.NET / Game Dev</h4>
                                    </div>
                            </div>
                            </div>
                        </div>
                        {/* Tools *************************************************************** */}
                        <div><h2 className='heading-skills'>Tools <span className='purple'>Known</span></h2>
                        </div>
                        <div className='skills'>
                            <div className='skills-left'>
                                <div className='skills-set'>
                                    <VscVscode className='skills-icon ' size={40} style={{color:'rgb(25, 103, 206)'}}></VscVscode>
                                    <div className='skills-title'>
                                        <h2>VS Code</h2>
                                        <h4>Code Editor</h4>
                                    </div>
                                </div>
                                <div className='skills-set'>
                                    <FaGithub className='skills-icon' size={40}></FaGithub>
                                    <div className='skills-title'>
                                        <h2>Git Hub</h2>
                                        <h4>Code Hosting</h4>
                                    </div>
                            </div>
                            <div className='skills-set'>
                                    {/* <SiMongodb className='skills-icon' size={40}></SiMongodb> */}
                                    <img src={gpt} alt="" width={60} className='skills-icon' style={{backgroundColor:'rgb(21, 180, 132)'}}/>
                                    <div className='skills-title'>
                                        <h2>ChatGPT</h2>
                                        <h4>AI Assistant</h4>
                                    </div>
                            </div>

                            </div>
                            <div className='skills-right'>
                            <div className='skills-set'>
                                    <SiPostman className='skills-icon' size={40} style={{color:'rgb(226, 22, 22)'}}></SiPostman>
                                    <div className='skills-title'>
                                        <h2>Postman</h2>
                                        <h4>API Testing Tool</h4>
                                    </div>
                            </div>
                            <div className='skills-set'>
                                    <FaGitAlt className='skills-icon' size={40} style={{color:'rgb(226, 22, 22)'}}></FaGitAlt>
                                    <div className='skills-title'>
                                        <h2>Git</h2>
                                        <h4>Version Control</h4>
                                    </div>
                            </div>
                            <div className='skills-set'>
                                    {/* <SiMysql className='skills-icon' size={40}></SiMysql> */}
                                    <img src={aws} alt="" width={60} className='skills-icon' />
                                    <div className='skills-title'>
                                        <h2>AWS</h2>
                                        <h4>Cloud Platform</h4>

                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}