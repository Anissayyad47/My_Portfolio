// Marquee.jsx
import React from 'react';
import './Css/Marquee.css'
import { FaCode } from "react-icons/fa6";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { MdAccountTree } from "react-icons/md";
const Marquee = () => {
  return (
<div className="wrapper">
  <div className="item item1">
    <FaCode size={40}></FaCode>
    <div className='marquee-icon'>
    <h3>300+</h3>
    <h3>Hours</h3>
    <h3>of Coding</h3>
    </div>
  </div>
  <div className="item item2">
    <RiGitRepositoryCommitsFill size={40}></RiGitRepositoryCommitsFill>
    <div className='marquee-icon'>
    <h3>300+</h3>
    <h3>Git</h3>
    <h3>Commits</h3>
    </div>
  </div>
  <div className="item item3">
    <FaTools size={40}></FaTools>
    <div className='marquee-icon'>
    <h3>5+</h3>
    <h3>Projects</h3>
    <h3>Done</h3>
    </div>
  </div>
  <div className="item item4">
    <MdAccountTree size={40}></MdAccountTree>
    <div className='marquee-icon'>
    <h3>50+</h3>
    <h3>Hours of Soft</h3>
    <h3>Skills Seassions</h3>
    </div>
  </div>
</div>
  );
};

export default Marquee;
