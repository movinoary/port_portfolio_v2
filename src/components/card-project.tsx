import React from "react";
import { list_project } from "@/data/project";
import Image from "next/image";
import CardIcon from "./card-icon";

const CardProject = () => {
  return list_project
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
                <CardIcon type="link-web" path={item?.linkWeb} />
                <CardIcon type="link-github" path={item?.linkGit} />
              </div>
            </div>
          </section>
        </figcaption>
      </figure>
    ));
};

export default CardProject;
