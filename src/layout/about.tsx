import Cardtechnologi from "@/components/card-technologi";
import React from "react";

const data = [
  {
    id: 1,
    title: "frontend",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "Type Script",
      "ReactJS",
      "VueJS",
      "NextJs",
      "React Native",
      "SASS",
      "Tailwind",
      "Styled Components",
      "Bootstrap",
      "Mapbox",
      "Axios",
      "Framer Motion",
      "Redux",
      "React Query",
    ],
  },
  {
    id: 2,
    title: "backend",
    skill: [
      "Python",
      "Node JS",
      "Flask",
      "Express JS",
      "Postgresql",
      "My SQL",
      "Sequelize",
      "Docker",
      "Postman",
    ],
  },
  {
    id: 3,
    title: "Other",
    skill: [
      "RestAPI",
      "graphQL",
      "Windows",
      "Ubuntu",
      "Github",
      "VS Code",
      "Netlify",
      "Vercel",
      "Figma",
      "Adobe Illustrator",
    ],
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <h1>
        I'm a results-driven System Analyst and Full-Stack Developer with a
        strong technical foundation and a sharp analytical mindset. With 3+
        years of hands-on experience in software development and nearly a year
        in system analysis, I specialize in translating complex business needs
        into scalable, high-impact digital solutions.
        <h1></h1>
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
        {data.map((dta) => (
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
