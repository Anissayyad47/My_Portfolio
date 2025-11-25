import './Css/Project.css'
import p1 from '../assets/local.png';
import p2 from '../assets/delivery.png';
import p3 from '../assets/task.png';
import p4 from '../assets/p1.png'
import project_1 from '../assets/project_1.png'
import project_2 from '../assets/project_2.png'
import p11 from '../assets/deliveryApp.png'

import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";


export default function Project_Section(){
    return(
        <>
        <div className='project-section'>
            <div className='project-heading'>
                <h1>Recent Projects</h1>
                <h1>and <span className='purple'>Achievements</span></h1>
            </div>
            <div className='project-section-left-right'>
            <div className='project-section-left'>
                <div className='project-contaner'>
                    <a href="https://github.com/Anissayyad47/E_Commerce_Delivery_-Zepto-" target="_blank" rel="noopener noreferrer">
                    <div className='project-parant'>
                        <img src={p11}  className='project-image'></img>
                        <div className='project-details-overlay'>
                        <p style={{ cursor: 'pointer' }}>RoomMate is a platform that helps users find affordable single or double rooms near their location. Users can search, apply filters, and directly contact property owners for a hassle-free experience.</p>
                    </div>
                    </div>
                    </a>
                    <div className='project_detals'>
                        <h3>E Commerce Delivery app</h3>
                        <div className='skills-used'>
                            <RiReactjsFill size={30}></RiReactjsFill>
                            <SiSpringboot size={30}></SiSpringboot>
                            <BiLogoPostgresql size={30}></BiLogoPostgresql>
                            <SiMongodb size={30}></SiMongodb>
                            <FaDocker size={30}></FaDocker>
                            <FaAws size={30}></FaAws>
                        </div>
                        <a href='https://e-commerce-delivery-zepto.vercel.app/' target='blank'><button className='live-demo'>Live Demo</button></a>
                    </div>
                </div>
                <div className='project-contaner'>
                    <a href="https://github.com/Anissayyad47/TaskManagement-with-user-authentication" target="_blank" rel="noopener noreferrer">
                    <div className='project-parant'>
                        <img src={p3}  className='project-image'></img>
                        <div className='project-details-overlay'>
                            <p style={{ cursor: 'pointer' }}>Developed a full-stack task management platform supporting task creation, updates, and deletion within multiple projects. Built a responsive React frontend with secure JWT authentication and a Node.js + Express backend. Used PostgreSQL for efficient data storage and management.</p>
                    </div>
                    </div>
                    </a>
                    <div className='project_detals'>
                        <h3>Task Mangament</h3>
                        <div className='skills-used'>
                            <RiReactjsFill size={30}></RiReactjsFill>
                            <SiExpress size={30}></SiExpress>
                            <FaNodeJs size={30}></FaNodeJs>
                            <SiMongodb size={30}></SiMongodb>
                        </div>
                    </div>
                </div>
                <div className='project-contaner'>
                    <a href="https://github.com/Anissayyad47/Weather-App-React" target="_blank" rel="noopener noreferrer">
                    <div className='project-parant'>
                        <img src={p4}  className='project-image'></img>
                        <div className='project-details-overlay'>
                            <p style={{ cursor: 'pointer' }}>Created a real-time weather application using React and the OpenWeatherMap API to fetch and display current weather data for any city. Designed a simple, user-friendly interface for quick weather lookups. Integrated live API data for accurate and up-to-date weather information.</p>
                    </div>
                    </div>
                    </a>
                    <div className='project_detals'>
                        <h3>Weather Forcast</h3>
                        <div className='skills-used'>
                            <RiReactjsFill size={30}></RiReactjsFill>
                            <TbApi size={30}></TbApi>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='project-section-right'>
                <div className='project-contaner'>
                    <a href="https://github.com/Anissayyad47/Rental_Room_Booking_System" target="_blank" rel="noopener noreferrer">
                    <div className='project-parant'>
                        <img src={project_1}  className='project-image'></img>
                        <div className='project-details-overlay'>
                        <p style={{ cursor: 'pointer' }}>RoomMate is a platform that helps users find affordable single or double rooms near their location. Users can search, apply filters, and directly contact property owners for a hassle-free experience.</p>
                    </div>
                    </div>
                    </a>
                    <div className='project_detals'>
                        <h3>Rental Room Booking App</h3>
                        <div className='skills-used'>
                            <RiReactjsFill size={30}></RiReactjsFill>
                            <SiSpringboot size={30}></SiSpringboot>
                            <SiMysql size={30}></SiMysql>
                            <SiMongodb size={30}></SiMongodb>
                            <FaAws size={30}></FaAws>
                        </div>
                    </div>
                </div>
                <div className='project-contaner'>
                    <a href="https://github.com/Anissayyad47/TaskManagement-with-user-authentication" target="_blank" rel="noopener noreferrer">
                    <div className='project-parant'>
                        <img src={project_2}  className='project-image'></img>
                        <div className='project-details-overlay'>
                            <p style={{ cursor: 'pointer' }}>A real-time chat application where users can search and create groups to chat with multiple people. I built this project to understand how real-time communication works over a network.</p>
                    </div>
                    </div>
                    </a>
                    <div className='project_detals'>
                        <h3>Real-Time-Chat-App</h3>
                        <div className='skills-used'>
                            <RiReactjsFill size={30}></RiReactjsFill>
                            <FaNodeJs size={30}></FaNodeJs>
                            <SiExpress size={30}></SiExpress>
                            <SiMongodb size={30}></SiMongodb>
                        </div>
                    </div>
                </div>
                <div className='project-contaner'>
                    <a href="https://github.com/Anissayyad47/Delivery-Orders-Management1" target="_blank" rel="noopener noreferrer">
                    <div className='project-parant'>
                        <img src={p2} className='project-image'></img>
                        <div className='project-details-overlay'>
                            <p style={{ cursor: 'pointer' }}>Built a full-stack order management platform with real-time tracking from placement to delivery. Developed a dynamic React frontend with secure JWT-based authentication and a Node.js + MongoDB backend. Enabled real-time status updates for sellers and delivery agents.</p>
                    </div>
                    </div>
                    </a>
                    <div className='project_detals'>
                        <h3>Delivery Order Management</h3>
                        <div className='skills-used'>
                            <RiReactjsFill size={30}></RiReactjsFill>
                            <SiRedux size={30}></SiRedux>
                            <FaNodeJs size={30}></FaNodeJs>
                            <SiExpress size={30}></SiExpress>
                            <SiMongodb size={30}></SiMongodb>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}