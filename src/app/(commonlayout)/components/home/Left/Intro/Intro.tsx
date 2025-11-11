"use client";

import React, { useEffect, useState } from "react";
import { getIntro } from "@/services/intro";
import { IIntro } from "@/types/intro";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe, MailCheck } from "lucide-react"; // ✅ Lucide icons
import LoadingUI from "@/app/(commonlayout)/shared/Loading/LoadingUI";

const iconMap: Record<string, React.ElementType> = {
  Github: Github,
  Linkedin: Linkedin,
  MailCheck: MailCheck, // ✅ Fixed key
  Twitter: Twitter,
  Website: Globe,
};

const Intro = () => {
  const [introData, setIntroData] = useState<IIntro | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        // setLoading(true);
        const data = await getIntro();
        if (data && data.length > 0) {
          setIntroData(data[0]);
        }
      } catch (err) {
        setError("Failed to load intro data.");
        console.error(err);
      } finally {
        // setLoading(false);
      }
    };

    fetchIntro();
  }, []);

  // if (loading)
  //   return (
  //     <div>
  //       <LoadingUI />
  //     </div>
  //   )
  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!introData) return null;

  return (
    <div className="my-6 md:mt-4 md:mb-0 flex flex-col md:flex-row gap-6 items-start">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-text">{introData.name}</h1>
        <h2 className="text-lg lg:text-2xl text-foreground mt-2">{introData.role}</h2>

        <p className="my-2 text-hovertext max-w-2xl whitespace-pre-line text-[16px]" dangerouslySetInnerHTML={{ __html: introData.smallDetails }} />
        {/* Resume Button */}
        {introData.resume && (
          <Button
            // variant="outline"
            asChild
            className="inline-block bg-transparent border border-text mt-2 px-4 py-2 text-text rounded-md hover:opacity-90 hover:bg-secondary hover:text-buttontext transition"
          >
            <a
              href={introData.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Intro;
