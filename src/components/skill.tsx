"use client";
import { useState } from "react";

const Skill = () => {
  const [category, setCategory] = useState("web");

  return (
    <section className="skill">
      <div className="top">
        <h1>Skill</h1>
        <div>
          <button
            className={category === "web" ? "active" : "non_active"}
            onClick={() => setCategory("web")}
          >
            WEB
          </button>
          <button
            className={category === "ui" ? "active" : "non_active"}
            onClick={() => setCategory("ui")}
          >
            UI DESAIN
          </button>
          <button
            className={category === "story" ? "active" : "non_active"}
            onClick={() => setCategory("story")}
          >
            CERPEN
          </button>
        </div>
      </div>{" "}
    </section>
  );
};

export default Skill;
