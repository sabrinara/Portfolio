"use client";

import React, { useEffect, useState } from "react";
import { getIntro } from "@/services/intro";
import { IIntro } from "@/types/intro";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  const router = useRouter();
  const [introData, setIntroData] = useState<IIntro | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

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

  if (loading)
    return <p className="text-muted-foreground mt-4">Loading intro...</p>;
  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!introData) return null;

  return (
    <section id="about" className="scroll-mt-[100px] md:scroll-mt-[60px] my-2">
      <h1 className="md:hidden text-2xl font-medium text-text my-4 text-center">About Me</h1>

      {theme === "dark" ? (
        <div
          className="text-justify text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: introData.about_content_dark || "",
          }}
        />
      ) : (
        <div
          className="text-justify text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: introData.about_content || "",
          }}
        />
      )}


        <div onClick={() => router.push("/about")} className="flex justify-center md:justify-end mt-6">
                <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer text-sm hover:text-text bg-secondary/10 transition-all duration-300 text-hovertext">
                    Get know more about me <ArrowUpRight size={16} />
                </div>
            </div>
    </section>
  );
};

export default About;
