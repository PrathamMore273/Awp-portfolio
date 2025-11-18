import React from "react";

export default function Home() {
  return (
    <section id="home" className="home-hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2 className="intro">Hi, I'm <span className="accent">Nirmal</span> </h2>
          <p className="lead">
            A passionate Web Developer and AI Enthusiast building creative projects.
          </p>

          <div className="hero-cta">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual">
          {/* Replace with your profile image: put one into public/assets/profile.jpg */}
          <div className="avatar-placeholder">N</div>
        </div>
      </div>
    </section>
  );
}
