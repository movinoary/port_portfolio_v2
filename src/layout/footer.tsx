"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };
  return (
    <footer className="footer">
      <p>v.2.7.0 © Copyright 2025 VO ||</p>
      <button
        className="card-navigation"
        onClick={() => navigate("https://v1-portfolio-vo.netlify.app/")}
      >
        version v.1
      </button>
    </footer>
  );
};

export default Footer;
