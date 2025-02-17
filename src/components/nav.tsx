"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };

  return (
    <nav className="nav">
      <h1 onClick={() => navigate("#home")}>VO</h1>
      <div>
        <button onClick={() => navigate("#about")}>About</button>
        <button onClick={() => navigate("#project")}>Projects</button>
        <button
          onClick={() => navigate("https://v1-portfolio-vo.netlify.app/")}
        >
          V1
        </button>
      </div>
    </nav>
  );
};

export default Nav;
