"use client";

import React, { useEffect, useState } from "react";
import { getIntro } from "@/services/intro";
import { IIntro } from "@/types/intro";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import LoadingUI from "@/app/(commonlayout)/shared/Loading/LoadingUI";

const Social = () => {
  const [introData, setIntroData] = useState<IIntro | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const data = await getIntro();
        if (data && data.length > 0) {
          setIntroData(data[0]);
        }
      } catch (err) {
        setError("Failed to load intro data.");
        console.error(err);
      }
    };

    fetchIntro();
  }, []);

  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!introData) return null;

  // Map social network names to corresponding icons
  const iconMapping: { [key: string]: React.ComponentType<any> } = {
    github: FiGithub,
    linkedin: FaLinkedin,
    leetcode: SiLeetcode,
    mail: IoIosMail,
  };

  return (
    <div>
      {/* ✅ Social Links with React Icons */}
      {introData.socialLinks && introData.socialLinks.length > 0 && (
        <div className="flex gap-4 mt-4 md:mt-0">
          {introData.socialLinks.map((link) => {
            // Get the appropriate icon component based on the title (e.g., 'github', 'linkedin')
            const IconComponent = iconMapping[link.title.toLowerCase()];

            return (
              <a
                key={link.title}
                title={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hovertext transition-colors text-muted-foreground flex items-center gap-2"
              >
                {IconComponent && <IconComponent size={20} />}
                {/* <span>{link.title}</span> */}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Social;
