import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        {/* Left Side - About Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Prathmesh More </strong> — a passionate developer and
            a Computer Science Engineering (CSE) student at{" "}
            <strong>Pimpri Chinchwad University</strong>. I love exploring
            web technologies, building creative interfaces, and solving
            real-world problems using technology. I’m currently learning React
            and Python to strengthen both frontend and AI integration skills.
          </p>

          <ul className="about-list">
            <li><strong>Course:</strong> B.Tech CSE (TY)</li>
            <li><strong>University:</strong> Pimpri Chinchwad University</li>
            <li><strong>Email:</strong> prathamore273@gmail.com</li>
            <li><strong>Location:</strong> Pune, India</li>
          </ul>
        </div>

        {/* Right Side - Skills Card */}
        <div className="skills-card">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill">
              <FaHtml5 className="skill-icon html" />
              <span>HTML</span>
            </div>
            <div className="skill">
              <FaCss3Alt className="skill-icon css" />
              <span>CSS</span>
            </div>
            <div className="skill">
              <FaJs className="skill-icon js" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <FaReact className="skill-icon react" />
              <span>DSA </span>
            </div>
            <div className="skill">
              <FaPython className="skill-icon python" />
              <span>Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

