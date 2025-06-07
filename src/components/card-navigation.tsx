import React from "react";

interface ICard {
  title: string;
}

const CardNavigation: React.FC<ICard> = ({ title }) => {
  return (
    <button
      className="card-navigation"
      onClick={() =>
        document.getElementById(title)?.scrollIntoView({ behavior: "smooth" })
      }
    >
      {title}
    </button>
  );
};

export default CardNavigation;
