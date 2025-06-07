"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CardNavigation from "@/components/card-navigation";

const data = [
  {
    id: 1,
    title: "about",
  },
  {
    id: 2,
    title: "experience",
  },
  {
    id: 3,
    title: "project",
  },
];

const Nav = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  const navigate = (url: string) => {
    router.push(url);
  };

  return (
    <nav className={!navbar ? "nav" : "nav-scroll"}>
      <div>
        <h1 onClick={() => navigate("#home")}>VO</h1>
      </div>
      <div>
        {data.map((d, i) => (
          <CardNavigation key={i} title={d.title} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
