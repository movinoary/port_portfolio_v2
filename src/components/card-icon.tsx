import React from "react";
import Link from "next/link";
import * as TbIcons from "react-icons/tb";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

interface ICard {
  type: string;
  path?: string;
}

const CardIcon: React.FC<ICard> = ({ type, path }) => {
  return type === "HTML" ? (
    <p className="card-icon html">
      <SiIcons.SiHtml5 />
      <span>HTML</span>
    </p>
  ) : type === "CSS" ? (
    <p className="card-icon css">
      <SiIcons.SiCss3 />
      <span>CSS</span>
    </p>
  ) : type === "JavaScript" ? (
    <p className="card-icon javascript">
      <SiIcons.SiJavascript />
      <span>JavaScript</span>
    </p>
  ) : type === "Type Script" ? (
    <p className="card-icon typescript">
      <SiIcons.SiTypescript />
      <span>Type Script</span>
    </p>
  ) : type === "ReactJS" ? (
    <p className="card-icon reactJs">
      <FaIcons.FaReact />
      <span>ReactJS</span>
    </p>
  ) : type === "VueJS" ? (
    <p className="card-icon vueJs">
      <FaIcons.FaVuejs />
      <span>VueJS</span>
    </p>
  ) : type === "NextJs" ? (
    <p className="card-icon nextJs">
      <SiIcons.SiNextdotjs />
      <span>NextJs</span>
    </p>
  ) : type === "React Native" ? (
    <p className="card-icon reactJs">
      <TbIcons.TbBrandReactNative />
      <span>React Native</span>
    </p>
  ) : type === "SASS" ? (
    <p className="card-icon sass">
      <SiIcons.SiSass />
      <span>SASS</span>
    </p>
  ) : type === "Tailwind" ? (
    <p className="card-icon tailwind">
      <SiIcons.SiTailwindcss />
      <span>Tailwind</span>
    </p>
  ) : type === "Styled Components" ? (
    <p className="card-icon styled_component">
      <SiIcons.SiStyledcomponents />
      <span>Styled Components</span>
    </p>
  ) : type === "Bootstrap" ? (
    <p className="card-icon bootstrap">
      <SiIcons.SiBootstrap />
      <span>Bootstrap</span>
    </p>
  ) : type === "Mapbox" ? (
    <p className="card-icon mapbox">
      <SiIcons.SiMapbox />
      <span>Mapbox</span>
    </p>
  ) : type === "Axios" ? (
    <p className="card-icon axios">
      <SiIcons.SiAxios />
      <span>Axios</span>
    </p>
  ) : type === "Framer Motion" ? (
    <p className="card-icon framer_motion">
      <SiIcons.SiFramer />
      <span>Framer Motion</span>
    </p>
  ) : type === "Redux" ? (
    <p className="card-icon redux">
      <SiIcons.SiRedux />
      <span>Redux</span>
    </p>
  ) : type === "React Query" ? (
    <p className="card-icon react_query">
      <SiIcons.SiReactquery />
      <span>React Query</span>
    </p>
  ) : type === "Python" ? (
    <p className="card-icon python">
      <FaIcons.FaPython />
      <span>Python</span>
    </p>
  ) : type === "Node JS" ? (
    <p className="card-icon nodeJS">
      <FaIcons.FaNodeJs />
      <span>Node JS</span>
    </p>
  ) : type === "Flask" ? (
    <p className="card-icon nextJs">
      <SiIcons.SiFlask />
      <span>Flask</span>
    </p>
  ) : type === "Express JS" ? (
    <p className="card-icon express">
      <SiIcons.SiExpress />
      <span>Express JS</span>
    </p>
  ) : type === "Postgresql" ? (
    <p className="card-icon postgresql">
      <SiIcons.SiPostgresql />
      <span>Postgresql</span>
    </p>
  ) : type === "My SQL" ? (
    <p className="card-icon mysql">
      <SiIcons.SiMysql />
      <span>My SQL</span>
    </p>
  ) : type === "Sequelize" ? (
    <p className="card-icon Sequelize">
      <SiIcons.SiSequelize />
      <span>Sequelize</span>
    </p>
  ) : type === "Docker" ? (
    <p className="card-icon docker">
      <SiIcons.SiDocker />
      <span>Docker</span>
    </p>
  ) : type === "Postman" ? (
    <p className="card-icon postman">
      <SiIcons.SiPostman />
      <span>Postman</span>
    </p>
  ) : type === "RestAPI" ? (
    <p className="card-icon windows">
      <TbIcons.TbApi />
      <span>RestAPI</span>
    </p>
  ) : type === "graphQL" ? (
    <p className="card-icon graphql">
      <SiIcons.SiGraphql />
      <span>graphQL</span>
    </p>
  ) : type === "Windows" ? (
    <p className="card-icon windows">
      <SiIcons.SiWindows11 />
      <span>Windows</span>
    </p>
  ) : type === "Ubuntu" ? (
    <p className="card-icon ubuntu">
      <SiIcons.SiUbuntu />
      <span>Ubuntu</span>
    </p>
  ) : type === "Github" ? (
    <p className="card-icon github">
      <SiIcons.SiGithub />
      <span>Github</span>
    </p>
  ) : type === "VS Code" ? (
    <p className="card-icon vscode">
      <TbIcons.TbBrandVscode />
      <span>VS Code</span>
    </p>
  ) : type === "Netlify" ? (
    <p className="card-icon netlify">
      <SiIcons.SiNetlify />
      <span>Netlify</span>
    </p>
  ) : type === "Vercel" ? (
    <p className="card-icon vercel">
      <SiIcons.SiVercel />
      <span>Vercel</span>
    </p>
  ) : type === "Figma" ? (
    <p className="card-icon figma">
      <SiIcons.SiFigma />
      <span>Figma</span>
    </p>
  ) : type === "Adobe Illustrator" ? (
    <p className="card-icon Illustrator">
      <SiIcons.SiAdobeillustrator />
      <span>Adobe Illustrator</span>
    </p>
  ) : type === "link-web" ? (
    <Link
      className="firefox"
      href={path ?? "/"}
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <SiIcons.SiFirefoxbrowser />
      </span>
    </Link>
  ) : type === "link-github" ? (
    <Link
      className="github"
      href={path ?? "/"}
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <FaIcons.FaGithub />
      </span>
    </Link>
  ) : type === "reactJs" ? (
    <span className="reactJs">
      <FaIcons.FaReact />
    </span>
  ) : type === "tailwind" ? (
    <span className="tailwind">
      <SiIcons.SiTailwindcss />
    </span>
  ) : type === "styled component" ? (
    <span className="styled_component">
      <SiIcons.SiStyledcomponents />
    </span>
  ) : type === "nextJs" ? (
    <span className="nextJs">
      <TbIcons.TbBrandNextjs />
    </span>
  ) : type === "scss" ? (
    <span className="sass">
      <SiIcons.SiSass />
    </span>
  ) : type === "mapbox" ? (
    <span className="mapbox">
      <SiIcons.SiMapbox />
    </span>
  ) : type === "axios" ? (
    <span className="axios">
      <SiIcons.SiAxios />
    </span>
  ) : type === "redux" ? (
    <span className="redux">
      <SiIcons.SiRedux />
    </span>
  ) : type === "framer-motion" ? (
    <span className="framer_motion">
      <SiIcons.SiFramer />
    </span>
  ) : type === "react-query" ? (
    <span className="react_query">
      <SiIcons.SiReactquery />
    </span>
  ) : null;
};

export default CardIcon;
