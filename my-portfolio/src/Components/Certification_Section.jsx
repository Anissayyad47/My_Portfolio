import p1 from '../assets/local.png';
import p2 from '../assets/delivery.png';
import p3 from '../assets/task.png';
import p4 from '../assets/p1.png'
import reactjs from '../assets/reactjs.jpg'
import mongodb from '../assets/mongodb.png'
import express from '../assets/express.png'

import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
export default function Certification_Section(){
    return(
        <>
        <div className='project-section'>
                    <div className='project-heading'>
                        <h1>Certifications</h1>
                    </div>
                    <div className='project-section-left-right'>
                    <div className='project-section-left'>
                        <div className='project-contaner'>
                            <a href="https://github.com/Anissayyad47/Certification/blob/main/certificate_React_661732.pdf" target="_blank" rel="noopener noreferrer">
                            <div className='project-parant'>
                                <img src={reactjs} width={320}height={200} className='project-image'></img>
                            </div>
                            </a>
                            <div className='project_detals'>
                                <h2 style={{ marginLeft:'10px' }}>React JS</h2>
                                <div className='skills-used'>
                                    <p>Prepinsta Technologies PVT LTD</p>
                                </div>
                            </div>
                        </div>
                        <div className='project-contaner'>
                            <a href="https://github.com/Anissayyad47/Certification/blob/main/certificate_Mongo%20DB_661732.pdf" target="_blank" rel="noopener noreferrer">
                            <div className='project-parant'>
                                <img src={mongodb} width={320} height={200} className='project-image'></img>
                            </div>
                            </a>
                            <div className='project_detals'>
                                <h3 style={{ marginLeft:'10px' }}>MongoDB</h3>
                                <div className='skills-used'>
                                    <p>Prepinsta Technologies PVT LTD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-section-right'>
                        <div className='project-contaner'>
                            <a href="https://github.com/Anissayyad47/Certification/blob/main/certificate_ExpressJs_661732.pdf" target="_blank" rel="noopener noreferrer">
                            <div className='project-parant'>
                                <img src={express} width={320} height={200} className='project-image'></img>
                            </div>
                            </a>
                            <div className='project_detals'>
                                <h3 style={{ marginLeft:'10px' }}>Express JS</h3>
                                <div className='skills-used'>
                                    <p>Prepinsta Technologies PVT LTD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}