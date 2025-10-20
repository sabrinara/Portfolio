"use client";

import React, { useEffect, useState } from "react";
import { getIntro } from "@/services/intro";
import { IIntro } from "@/types/intro";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe, MailCheck } from "lucide-react"; // ✅ Lucide icons

const iconMap: Record<string, React.ElementType> = {
  Github: Github,
  Linkedin: Linkedin,
  MailCheck: MailCheck, // ✅ Fixed key
  Twitter: Twitter,
  Website: Globe,
};

const Intro = () => {
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
  if (!introData) return null;

  return (
    <div className="my-2 flex flex-col md:flex-row gap-6 items-start">
      <div>
        <h1 className="text-5xl font-medium text-text">{introData.name}</h1>
        <h2 className="text-xl text-foreground mt-2">{introData.role}</h2>

        <p className="my-4 text-muted-foreground max-w-2xl whitespace-pre-line"  dangerouslySetInnerHTML={{ __html: introData.smallDetails }}/>

   

        {/* Resume Button */}
        {introData.resume && (
          <Button
            variant="secondary"
            asChild
            className="inline-block mt-2 px-4 py-2 text-white rounded-md hover:opacity-90 transition"
          >
            <a
              href={introData.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Intro;
