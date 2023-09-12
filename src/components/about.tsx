import React from "react";
import * as TbIcons from "react-icons/tb";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const About = () => {
  return (
    <section className="about" id="about">
      <h1>
        "Saya adalah seorang Junior Web Developer yang tengah mencari peluang
        baru sebagai Web Developer di berbagai bidang. Saya telah menyelesaikan
        Bootcamp Fullstack Developer di dumbways.id dan memiliki pengalaman
        belajar di dunia IT selama lebih dari 7 tahun, yang mencakup aspek
        hardware dan software. Dalam pengalaman kerja sebelumnya, saya memiliki
        kemampuan adaptasi yang baik terhadap kode yang ada dan dapat
        menyelesaikan tugas dengan cepat. Saya sangat bersemangat untuk
        mengembangkan kemampuan saya di bidang IT dan terus belajar hal-hal baru
        dalam industri ini."
      </h1>
      <section className="content">
        <div>
          <h1>Frontend</h1>
          <figure className="row">
            <p className="html">
              <SiIcons.SiHtml5 />
              <span>HTML</span>
            </p>
            <p className="css">
              <SiIcons.SiCss3 />
              <span>CSS</span>
            </p>
            <p className="javascript">
              <SiIcons.SiJavascript />
              <span>JavaScript</span>
            </p>
            <p className="typescript">
              <SiIcons.SiTypescript />
              <span>Type Script</span>
            </p>
          </figure>
          <figure className="row">
            <p className="reactJs">
              <FaIcons.FaReact />
              <span>ReactJS</span>
            </p>
            <p className="vueJs">
              <FaIcons.FaVuejs />
              <span>VueJS</span>
            </p>
            <p className="nextJs">
              <SiIcons.SiNextdotjs />
              <span>NextJs</span>
            </p>
            <p className="reactJs">
              <TbIcons.TbBrandReactNative />
              <span>React Native</span>
            </p>
          </figure>
          <figure className="row">
            <p className="sass">
              <SiIcons.SiSass />
              <span>SASS</span>
            </p>
            <p className="tailwind">
              <SiIcons.SiTailwindcss />
              <span>Tailwind</span>
            </p>
            <p className="styled_component">
              <SiIcons.SiStyledcomponents />
              <span>Styled Components</span>
            </p>
            <p className="bootstrap">
              <SiIcons.SiBootstrap />
              <span>Bootstrap</span>
            </p>
          </figure>
          <figure className="row">
            <p className="mapbox">
              <SiIcons.SiMapbox />
              <span>Mapbox</span>
            </p>
            <p className="axios">
              <SiIcons.SiAxios />
              <span>Axios</span>
            </p>
            <p className="framer_motion">
              <SiIcons.SiFramer />
              <span>Framer Motion</span>
            </p>
            <p className="redux">
              <SiIcons.SiRedux />
              <span>Redux</span>
            </p>
            <p className="react_query">
              <SiIcons.SiReactquery />
              <span>React Query</span>
            </p>
          </figure>
        </div>
        <div>
          <h1>Backend</h1>
          <div className="row">
            <p className="nodeJS">
              <FaIcons.FaNodeJs />
              <span>Node JS</span>
            </p>
            <p className="express">
              <SiIcons.SiExpress />
              <span>Express JS</span>
            </p>
          </div>
          <div className="row">
            <p className="postgresql">
              <SiIcons.SiPostgresql />
              <span>Postgresql</span>
            </p>
            <p className="mysql">
              <SiIcons.SiMysql />
              <span>My SQL</span>
            </p>
            <p className="Sequelize">
              <SiIcons.SiSequelize />
              <span>Sequelize</span>
            </p>
          </div>
          <div className="row">
            <p className="docker">
              <SiIcons.SiDocker />
              <span>Docker</span>
            </p>
            <p className="postman">
              <SiIcons.SiPostman />
              <span>Postman</span>
            </p>
          </div>
        </div>
        <div>
          <h1>Lainnya</h1>
          <div className="row">
            <p className="windows">
              <SiIcons.SiWindows11 />
              <span>Windows</span>
            </p>
            <p className="ubuntu">
              <SiIcons.SiUbuntu />
              <span>Ubuntu</span>
            </p>
          </div>
          <div className="row">
            <p className="github">
              <SiIcons.SiGithub />
              <span>Github</span>
            </p>
            <p className="vscode">
              <TbIcons.TbBrandVscode />
              <span>VS Code</span>
            </p>
            <p className="netlify">
              <SiIcons.SiNetlify />
              <span>Netlify</span>
            </p>
            <p className="vercel">
              <SiIcons.SiVercel />
              <span>Vercel</span>
            </p>
          </div>
          <div className="row">
            <p className="figma">
              <SiIcons.SiFigma />
              <span>Figma</span>
            </p>
            <p className="Illustrator">
              <SiIcons.SiAdobeillustrator />
              <span>Adobe Illustrator</span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
