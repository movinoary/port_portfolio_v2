import React from "react";
import Data from "@/data/experience.json";

interface ICard {
  category: string;
}

const CardExperience: React.FC<ICard> = ({ category }) => {
  return Data.filter((f) => f.category === category).map((d, i) => (
    <figure key={i} className="card_experience">
      <p className="year">{d.period}</p>
      <h1 className="office">{d.company}</h1>
      <h2 className="position">{d.title}</h2>
      <p className="desc">{d.summary}</p>
    </figure>
  ));
};

export default CardExperience;
