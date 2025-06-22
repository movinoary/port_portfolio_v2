"use client";
import React from "react";
import CardIcon from "./card-icon";

interface TickerProps {
  skills: string[];
}

const Cardtechnologi: React.FC<TickerProps> = ({ skills }) => {
  return (
    <main className="ticker-container">
      <section className="ticker-content">
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="ticker-item">
            <CardIcon type={skill} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Cardtechnologi;
