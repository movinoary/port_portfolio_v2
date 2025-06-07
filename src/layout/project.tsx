"use client";
import { list_project } from "@/data/project";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import * as TbIcons from "react-icons/tb";
import * as SiIcons from "react-icons/si";
import Link from "next/link";
import Count from "@/components/count";

const Project = () => {
  const renderContent = list_project
    .filter((f) => f.category === "web")
    .map((item, index) => (
      <figure className="card_project" key={index}>
        <div className="images">
          <Image
            src={item.photo}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <figcaption>
          <h1>{item.title}</h1>
          <p>{item?.desc}</p>
          <section className="container">
            <div className="item_icon">
              <h3>Link</h3>
              <div className="row">
                {item.category !== "web" ? (
                  <>
                    <Link
                      className="framer_motion"
                      href={item?.linkWeb}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <FaIcons.FaDesktop />
                      </span>
                    </Link>
                    <Link
                      className="github"
                      href={item.linkGit}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="tailwind">
                        <FaIcons.FaMobile />
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="github"
                      href={item?.linkGit}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <FaIcons.FaGithub />
                      </span>
                    </Link>
                    <Link
                      className="github"
                      href={item.linkWeb}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="firefox">
                        <SiIcons.SiFirefoxbrowser />
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            {item.category === "web" && (
              <div className="item_icon">
                <h3>Techology</h3>
                <div className="row">
                  {item?.techology?.map((t, index) =>
                    t === "reactJs" ? (
                      <span className="reactJs" key={index}>
                        <FaIcons.FaReact />
                      </span>
                    ) : t === "tailwind" ? (
                      <span className="tailwind" key={index}>
                        <SiIcons.SiTailwindcss />
                      </span>
                    ) : t === "styled component" ? (
                      <span className="styled_component" key={index}>
                        <SiIcons.SiStyledcomponents />
                      </span>
                    ) : t === "nextJs" ? (
                      <span className="nextJs" key={index}>
                        <TbIcons.TbBrandNextjs />
                      </span>
                    ) : t === "scss" ? (
                      <span className="sass" key={index}>
                        <SiIcons.SiSass />
                      </span>
                    ) : t === "mapbox" ? (
                      <span className="mapbox" key={index}>
                        <SiIcons.SiMapbox />
                      </span>
                    ) : t === "axios" ? (
                      <span className="axios" key={index}>
                        <SiIcons.SiAxios />
                      </span>
                    ) : t === "redux" ? (
                      <span className="redux" key={index}>
                        <SiIcons.SiRedux />
                      </span>
                    ) : t === "framer-motion" ? (
                      <span className="framer_motion" key={index}>
                        <SiIcons.SiFramer />
                      </span>
                    ) : t === "react-query" ? (
                      <span className="react_query" key={index}>
                        <SiIcons.SiReactquery />
                      </span>
                    ) : null
                  )}
                </div>
              </div>
            )}
          </section>
        </figcaption>
      </figure>
    ));

  return (
    <section className="project" id="project">
      <header className="top">
        <h1>Project</h1>
        <div>
          {/* <ButtonCategory title="web" /> */}
          {/* <ButtonCategory title="ui desain" /> */}
        </div>
      </header>
      <div className="content">{renderContent}</div>
    </section>
  );
};

export default Project;
