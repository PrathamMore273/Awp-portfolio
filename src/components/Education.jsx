import React from "react";

export default function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        <div className="education-card">
          <h3>B.Tech in CSE</h3>
          <p>
            Pimpri Chinchwad University (2023 – 2027)
          </p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary School (HSC)</h3>
          <p>govt.hr.sec.school (2021 – 2023)</p>
        </div>

        <div className="education-card">
          <h3>Secondary School Certificate (SSC)</h3>
          <p>Orion English Medium School (2021)</p>
        </div>
      </div>
    </section>
  );
}
