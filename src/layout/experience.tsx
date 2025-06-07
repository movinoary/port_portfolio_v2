"use client";
import React, { useEffect, useState, useRef } from "react";
import CardExperience from "@/components/card-experience";

const Experience = () => {
  const [activeLabel, setActiveLabel] = useState("Full Time");

  const fullTimeRef = useRef<HTMLDivElement | null>(null);
  const freelanceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target === fullTimeRef.current) {
          setActiveLabel("Full Time");
        } else if (visible?.target === freelanceRef.current) {
          setActiveLabel("Freelance");
        }
      },
      { threshold: 0.5 }
    );

    if (fullTimeRef.current) observer.observe(fullTimeRef.current);
    if (freelanceRef.current) observer.observe(freelanceRef.current);

    return () => {
      if (fullTimeRef.current) observer.unobserve(fullTimeRef.current);
      if (freelanceRef.current) observer.unobserve(freelanceRef.current);
    };
  }, []);

  return (
    <section className="experience" id="experience">
      <section className="title">
        <h1>Experience</h1>
        <p>{activeLabel}</p>
      </section>

      <section className="content">
        <div ref={fullTimeRef}>
          <CardExperience category="work" />
        </div>

        <div ref={freelanceRef}>
          <CardExperience category="freelance" />
        </div>
      </section>
    </section>
  );
};

export default Experience;
