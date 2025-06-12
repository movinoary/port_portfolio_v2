import React from "react";
import Cardtechnologi from "@/components/card-technologi";
import DataTechnologi from "@/data/technologi.json";

const About = () => {
  return (
    <section className="about" id="about">
      <h1>
        I'm a results-driven System Analyst and Full-Stack Developer with a
        strong technical foundation and a sharp analytical mindset. With 3+
        years of hands-on experience in software development and nearly a year
        in system analysis, I specialize in translating complex business needs
        into scalable, high-impact digital solutions.
      </h1>
      <h1>
        An experienced Web Developer transitioning from comprehensive System
        Analysis to hands-on Full-Stack Development, I have successfully
        designed and implemented mission-critical systems—including the
        integration of National Single Window APIs and the development of
        cross-platform applications that streamline operations and enhance user
        experience.
      </h1>
      <h1>
        Proficient in modern technologies such as Next.js, React, Node.js, and a
        variety of database technologies, I take pride in delivering end-to-end,
        high-performance, user-centric solutions—from concept to deployment.
      </h1>
      <section className="content">
        {DataTechnologi.map((dta) => (
          <div key={dta.id} className="card-technologi">
            <h1>{dta.title}</h1>
            <Cardtechnologi skills={dta.skill} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default About;
