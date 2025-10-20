"use client";

import React, { useEffect, useState } from "react";
import { getIntro } from "@/services/intro";
import { IIntro } from "@/types/intro";

const About = () => {
  const [introData, setIntroData] = useState<IIntro | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        setLoading(true);
        const data = await getIntro();
        if (data && data.length > 0) {
          setIntroData(data[0]);
        }
      } catch (err) {
        setError("Failed to load intro data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIntro();
  }, []);

  if (loading) return <p className="text-muted-foreground mt-4">Loading intro...</p>;
  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!introData || !introData.about_content) return null;

  return (
    <section id="about" className="scroll-mt-[60px] my-4">
      {/* <h1 className="text-3xl font-medium text-text mb-4">About</h1> */}
      <div
        className="text-justify text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: introData.about_content }}
      />
    </section>
  );
};

export default About;
