"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CardNavigation from "@/components/card-navigation";
import DataNav from "@/data/nav.json";

const Nav = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    console.log(scrollY);

    setNavbar(scrollY >= 300);
    if ((scrollY >= 986 && scrollY < 2190) || scrollY >= 5830) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (url: string) => {
    router.push(url);
  };

  return (
    <nav
      className={!navbar ? "nav" : "nav-scroll"}
      style={{ background: `${!color ? "#353941" : "#26282b"}` }}
    >
      <div>
        <h1 onClick={() => navigate("#home")}>VO</h1>
      </div>
      <div>
        {DataNav.map((d, i) => (
          <CardNavigation key={i} title={d.title} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
